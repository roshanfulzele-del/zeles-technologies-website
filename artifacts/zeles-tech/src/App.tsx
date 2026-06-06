import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PageLayout } from "@/components/layout/PageLayout";

import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Contact from "@/pages/contact";
import Industries from "@/pages/industries";
import Technology from "@/pages/technology";
import CaseStudies from "@/pages/case-studies";
import Blog from "@/pages/blog";
import Careers from "@/pages/careers";

import Cybersecurity from "@/pages/services/cybersecurity";
import CloudSecurity from "@/pages/services/cloud-security";
import DataSecurity from "@/pages/services/data-security";
import NetworkInfrastructure from "@/pages/services/network-infrastructure";
import SaseZeroTrust from "@/pages/services/sase-zero-trust";
import ManagedSecurity from "@/pages/services/managed-security";
import SoftwareDevelopment from "@/pages/services/software-development";

const queryClient = new QueryClient();

function AppRoutes() {
  return (
    <PageLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/services/cybersecurity" component={Cybersecurity} />
        <Route path="/services/cloud-security" component={CloudSecurity} />
        <Route path="/services/data-security" component={DataSecurity} />
        <Route path="/services/network-infrastructure" component={NetworkInfrastructure} />
        <Route path="/services/sase-zero-trust" component={SaseZeroTrust} />
        <Route path="/services/managed-security" component={ManagedSecurity} />
        <Route path="/services/software-development" component={SoftwareDevelopment} />
        <Route path="/industries" component={Industries} />
        <Route path="/technology" component={Technology} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route path="/blog" component={Blog} />
        <Route path="/careers" component={Careers} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </PageLayout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <AppRoutes />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
