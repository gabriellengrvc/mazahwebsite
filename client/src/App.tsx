import { Switch, Route } from "wouter";
import { queryClient } from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
//import PrivacyPolicy from "@/pages/privacy-policy";
import * as PrivacyPolicyMod from "./pages/privacy-policy"; 
const PrivacyPolicy =
  (PrivacyPolicyMod as any).default ??
  (PrivacyPolicyMod as any).PrivacyPolicy;
console.log("PrivacyPolicy module keys:", Object.keys(PrivacyPolicyMod));
//import Terms from "@/pages/terms";
import * as TermsMod from "./pages/terms"; // use RELATIVE path for now
const Terms =
  (TermsMod as any).default ??
  (TermsMod as any).Terms;

console.log("Terms module keys:", Object.keys(TermsMod));
import Navbar from "@/components/navigation";
import Footer from "@/components/footer";
import Contact from "@/pages/contact";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>

        <Route path="/privacy-policy">
          <PrivacyPolicy />
        </Route>

        <Route path="/terms">
          <Terms />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
