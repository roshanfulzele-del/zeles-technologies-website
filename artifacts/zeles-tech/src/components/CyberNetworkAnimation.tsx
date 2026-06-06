import { useEffect, useRef } from "react";

type NodeType = "core" | "firewall" | "cloud" | "server" | "endpoint";
type NodeStatus = "secure" | "threat" | "monitoring";

interface CyberNode {
  x: number;
  y: number;
  radius: number;
  type: NodeType;
  label: string;
  sublabel: string;
  status: NodeStatus;
  threatTimer: number;
}

interface Packet {
  fromIdx: number;
  toIdx: number;
  progress: number;
  speed: number;
  threat: boolean;
}

const NODE_COLORS: Record<NodeType, string> = {
  core: "#1d4ed8",
  firewall: "#0ea5e9",
  cloud: "#7c3aed",
  server: "#059669",
  endpoint: "#d97706",
};

const NODE_LABELS: Record<NodeType, string> = {
  core: "ZT",
  firewall: "FW",
  cloud: "CL",
  server: "SV",
  endpoint: "EP",
};

export function CyberNetworkAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;
    let threatCooldown = 4;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = container.offsetWidth;
      const h = container.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
      return { w, h };
    };

    let { w, h } = resize();

    const buildNodes = (w: number, h: number): CyberNode[] => {
      const cx = w / 2;
      const cy = h / 2;
      const ring1 = Math.min(w, h) * 0.22;
      const ring2 = Math.min(w, h) * 0.42;

      const defs: Array<{
        type: NodeType;
        label: string;
        sublabel: string;
        angle: number;
        dist: number;
      }> = [
        { type: "core", label: "ZT", sublabel: "Security Core", angle: 0, dist: 0 },
        { type: "firewall", label: "FW", sublabel: "Firewall", angle: 0, dist: ring1 },
        { type: "firewall", label: "FW", sublabel: "WAF", angle: 120, dist: ring1 },
        { type: "firewall", label: "IDS", sublabel: "IDS/IPS", angle: 240, dist: ring1 },
        { type: "cloud", label: "CL", sublabel: "Azure", angle: 20, dist: ring2 },
        { type: "cloud", label: "CL", sublabel: "AWS", angle: 80, dist: ring2 },
        { type: "server", label: "SV", sublabel: "DB Server", angle: 150, dist: ring2 },
        { type: "server", label: "SV", sublabel: "App Server", angle: 210, dist: ring2 },
        { type: "endpoint", label: "EP", sublabel: "Endpoints", angle: 280, dist: ring2 },
        { type: "endpoint", label: "EP", sublabel: "Mobile", angle: 340, dist: ring2 },
      ];

      return defs.map((d) => {
        const rad = (d.angle * Math.PI) / 180;
        return {
          x: cx + Math.cos(rad) * d.dist,
          y: cy + Math.sin(rad) * d.dist,
          radius: d.type === "core" ? 26 : d.dist === ring1 ? 19 : 15,
          type: d.type,
          label: d.label,
          sublabel: d.sublabel,
          status: "secure",
          threatTimer: 0,
        };
      });
    };

    let nodes = buildNodes(w, h);

    // Connection pairs [from, to]
    const CONNS: Array<[number, number]> = [
      [0, 1], [0, 2], [0, 3],
      [1, 4], [1, 5],
      [2, 6], [2, 7],
      [3, 8], [3, 9],
      [4, 5],
      [6, 7],
      [8, 9],
    ];

    const packets: Packet[] = [];

    const spawnPacket = () => {
      const [a, b] = CONNS[Math.floor(Math.random() * CONNS.length)];
      const flip = Math.random() > 0.5;
      const from = flip ? b : a;
      const to = flip ? a : b;
      const isThreat = nodes[from].status === "threat" || nodes[to].status === "threat";
      packets.push({ fromIdx: from, toIdx: to, progress: 0, speed: 0.005 + Math.random() * 0.007, threat: isThreat });
    };

    for (let i = 0; i < 8; i++) spawnPacket();

    const hexPath = (ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i - Math.PI / 6;
        const x = cx + r * Math.cos(a);
        const y = cy + r * Math.sin(a);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
    };

    const drawShieldIcon = (ctx: CanvasRenderingContext2D, x: number, y: number, r: number) => {
      const s = r * 0.6;
      ctx.beginPath();
      ctx.moveTo(x, y - s);
      ctx.lineTo(x + s * 0.85, y - s * 0.4);
      ctx.lineTo(x + s * 0.85, y + s * 0.2);
      ctx.quadraticCurveTo(x + s * 0.85, y + s * 1.1, x, y + s * 1.1);
      ctx.quadraticCurveTo(x - s * 0.85, y + s * 1.1, x - s * 0.85, y + s * 0.2);
      ctx.lineTo(x - s * 0.85, y - s * 0.4);
      ctx.closePath();
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,0.3)";
      ctx.lineWidth = 0.5;
      ctx.stroke();
      // checkmark
      ctx.beginPath();
      ctx.moveTo(x - s * 0.3, y + s * 0.25);
      ctx.lineTo(x - s * 0.05, y + s * 0.55);
      ctx.lineTo(x + s * 0.45, y - s * 0.05);
      ctx.strokeStyle = NODE_COLORS.core;
      ctx.lineWidth = 1.5;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();
    };

    const drawNodeIcon = (
      ctx: CanvasRenderingContext2D,
      node: CyberNode,
    ) => {
      const { x, y, radius: r, type, label } = node;
      if (type === "core") {
        drawShieldIcon(ctx, x, y - r * 0.05, r);
        return;
      }
      ctx.fillStyle = "rgba(255,255,255,0.95)";
      ctx.font = `bold ${Math.round(r * 0.58)}px 'Inter', system-ui, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(label, x, y);
    };

    const draw = () => {
      const currentW = container.offsetWidth;
      const currentH = container.offsetHeight;
      if (currentW !== w || currentH !== h) {
        ;({ w, h } = resize());
        nodes = buildNodes(w, h);
      }

      ctx.clearRect(0, 0, w, h);
      time += 0.016;
      threatCooldown -= 0.016;

      // Spawn threat
      if (threatCooldown <= 0 && Math.random() < 0.01) {
        const outer = [4, 5, 6, 7, 8, 9];
        const t = outer[Math.floor(Math.random() * outer.length)];
        nodes[t].status = "threat";
        nodes[t].threatTimer = 2.5 + Math.random() * 2;
        threatCooldown = 5 + Math.random() * 3;
      }

      // Update threats
      nodes.forEach((n) => {
        if (n.status === "threat") {
          n.threatTimer -= 0.016;
          if (n.threatTimer <= 0) n.status = "secure";
        }
      });

      // Draw connections
      CONNS.forEach(([ai, bi]) => {
        const a = nodes[ai];
        const b = nodes[bi];
        const isThreat = a.status === "threat" || b.status === "threat";
        const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
        const baseAlpha = isThreat ? 0.5 : 0.2;
        const col = isThreat ? "239,68,68" : "56,189,248";
        grad.addColorStop(0, `rgba(${col},${baseAlpha})`);
        grad.addColorStop(0.5, `rgba(${col},${baseAlpha * 2})`);
        grad.addColorStop(1, `rgba(${col},${baseAlpha})`);
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = isThreat ? 1.5 : 1;
        ctx.stroke();
      });

      // Update + draw packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.progress += p.speed;
        if (p.progress >= 1) {
          packets.splice(i, 1);
          if (packets.length < 12) spawnPacket();
          continue;
        }
        const from = nodes[p.fromIdx];
        const to = nodes[p.toIdx];
        const px = from.x + (to.x - from.x) * p.progress;
        const py = from.y + (to.y - from.y) * p.progress;
        const col = p.threat ? "#f87171" : "#38bdf8";
        ctx.beginPath();
        ctx.arc(px, py, p.threat ? 4 : 3, 0, Math.PI * 2);
        ctx.fillStyle = col;
        ctx.shadowColor = col;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
        // Trail
        const trailLen = 0.06;
        const t0 = Math.max(0, p.progress - trailLen);
        const tx0 = from.x + (to.x - from.x) * t0;
        const ty0 = from.y + (to.y - from.y) * t0;
        const tGrad = ctx.createLinearGradient(tx0, ty0, px, py);
        tGrad.addColorStop(0, `${col}00`);
        tGrad.addColorStop(1, `${col}88`);
        ctx.beginPath();
        ctx.moveTo(tx0, ty0);
        ctx.lineTo(px, py);
        ctx.strokeStyle = tGrad;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      if (packets.length < 8) spawnPacket();

      // Draw nodes
      nodes.forEach((node, i) => {
        const { x, y, radius: r, type, status, sublabel } = node;
        const color = status === "threat" ? "#dc2626" : NODE_COLORS[type];
        const pulse = Math.sin(time * 2 + i * 1.1) * 0.5 + 0.5;

        // Outer pulse ring
        ctx.beginPath();
        ctx.arc(x, y, r + 8 + pulse * 7, 0, Math.PI * 2);
        ctx.strokeStyle = status === "threat"
          ? `rgba(239,68,68,${0.35 * pulse})`
          : `rgba(56,189,248,${0.18 * pulse})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Core extra ring
        if (type === "core") {
          const p2 = Math.sin(time * 1.3) * 0.5 + 0.5;
          ctx.beginPath();
          ctx.arc(x, y, r + 22 + p2 * 14, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(56,189,248,${0.08 * p2})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Hexagon bg for firewalls / node circle for others
        if (type === "firewall") {
          ctx.save();
          hexPath(ctx, x, y, r);
          const bg = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, 0, x, y, r);
          bg.addColorStop(0, color + "ff");
          bg.addColorStop(1, color + "bb");
          ctx.fillStyle = bg;
          ctx.shadowColor = color;
          ctx.shadowBlur = 18;
          ctx.fill();
          ctx.strokeStyle = "rgba(255,255,255,0.25)";
          ctx.lineWidth = 1.5;
          ctx.stroke();
          ctx.shadowBlur = 0;
          ctx.restore();
        } else {
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          const bg = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, 0, x, y, r);
          bg.addColorStop(0, color + "ff");
          bg.addColorStop(1, color + "cc");
          ctx.fillStyle = bg;
          ctx.shadowColor = color;
          ctx.shadowBlur = 18;
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.strokeStyle = "rgba(255,255,255,0.2)";
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        drawNodeIcon(ctx, node);

        // Label below
        ctx.fillStyle = status === "threat" ? "#fca5a5" : "rgba(148,163,184,0.9)";
        ctx.font = `${Math.round(r * 0.55)}px 'Inter', system-ui, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.fillText(sublabel, x, y + r + 5);

        // Threat badge
        if (status === "threat") {
          const bw = 90, bh = 18, bx = x - bw / 2, by = y - r - 28;
          ctx.fillStyle = "rgba(220,38,38,0.85)";
          ctx.beginPath();
          ctx.roundRect(bx, by, bw, bh, 4);
          ctx.fill();
          ctx.fillStyle = "#fff";
          ctx.font = `bold ${Math.round(r * 0.48)}px 'Inter', system-ui, sans-serif`;
          ctx.textBaseline = "middle";
          ctx.fillText("⚠ THREAT DETECTED", x, by + bh / 2);
        }
      });

      // Live indicator badge (top-right)
      const bw = 100, bh = 22, bx = w - bw - 12, by = 12;
      ctx.fillStyle = "rgba(15,23,42,0.6)";
      ctx.beginPath();
      ctx.roundRect(bx, by, bw, bh, 11);
      ctx.fill();
      const dotR = 4;
      const dotX = bx + 14, dotY = by + bh / 2;
      const threatCount = nodes.filter((n) => n.status === "threat").length;
      ctx.beginPath();
      ctx.arc(dotX, dotY, dotR, 0, Math.PI * 2);
      ctx.fillStyle = threatCount > 0 ? "#f87171" : "#4ade80";
      ctx.shadowColor = threatCount > 0 ? "#f87171" : "#4ade80";
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.fillStyle = "#e2e8f0";
      ctx.font = "bold 10px 'Inter', system-ui, sans-serif";
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      ctx.fillText(threatCount > 0 ? "THREAT ACTIVE" : "ALL SECURE", dotX + dotR + 6, dotY);

      animId = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      ;({ w, h } = resize());
      nodes = buildNodes(w, h);
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
