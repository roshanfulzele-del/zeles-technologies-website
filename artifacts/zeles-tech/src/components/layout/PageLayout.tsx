import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col w-full bg-background text-foreground font-sans">
      <Navbar />
      <main className="flex-1 flex flex-col pt-[72px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
