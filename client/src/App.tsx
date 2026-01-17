import { Switch, Route } from "wouter";
import { queryClient } from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import PrivacyPolicy from "@/pages/privacy-policy";
import Terms from "@/pages/terms";
import Navbar from "@/components/navigation";
import Footer from "@/components/footer";
import Contact from "@/pages/contact";
import BlogIndex from "@/pages/blog/BlogIndex";
import BlogPost from "@/pages/blog/BlogPost";
import { Analytics } from "@vercel/analytics/react";

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
        
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/blog" component={BlogIndex} />

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
        <Analytics />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
