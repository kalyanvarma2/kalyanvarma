import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NewsFeed from "./pages/NewsFeed";
import Events from "./pages/Events";
import Portfolio from "./pages/Portfolio";
import ResumeSkills from "./pages/ResumeSkills";
import FarmerService from "./pages/FarmerService";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/news" element={<NewsFeed />} />
              <Route path="/events" element={<Events />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/resume-skills" element={<ResumeSkills />} />
              <Route path="/farmer-service" element={<FarmerService />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
