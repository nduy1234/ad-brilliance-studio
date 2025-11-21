import { useState } from "react";
import { Hero } from "@/components/Hero";
import { UploadSection } from "@/components/UploadSection";
import { MetricsSection } from "@/components/MetricsSection";
import { ResultsDashboard } from "@/components/ResultsDashboard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

type Step = "hero" | "upload" | "metrics" | "results";

const Index = () => {
  const [currentStep, setCurrentStep] = useState<Step>("hero");
  const [images, setImages] = useState<string[]>([]);
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>([]);

  const handleGetStarted = () => setCurrentStep("upload");
  
  const handleUploadNext = (uploadedImages: string[]) => {
    setImages(uploadedImages);
    setCurrentStep("metrics");
  };

  const handleRunTest = (metrics: string[]) => {
    setSelectedMetrics(metrics);
    setCurrentStep("results");
  };

  const handleBack = () => {
    if (currentStep === "upload") setCurrentStep("hero");
    else if (currentStep === "metrics") setCurrentStep("upload");
    else if (currentStep === "results") setCurrentStep("metrics");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/20" />
            <span className="font-bold text-xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">AdTest AI</span>
          </div>
          
          {currentStep !== "hero" && (
            <Button variant="ghost" onClick={handleBack} className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        {currentStep === "hero" && <Hero onGetStarted={handleGetStarted} />}
        {currentStep === "upload" && <UploadSection onNext={handleUploadNext} />}
        {currentStep === "metrics" && <MetricsSection onRunTest={handleRunTest} />}
        {currentStep === "results" && <ResultsDashboard images={images} metrics={selectedMetrics} />}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 mt-24 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/20" />
            <span className="font-bold text-lg">AdTest AI</span>
          </div>
          <p className="text-muted-foreground text-sm">© 2024 AdTest AI. Powered by advanced multimodal AI agents.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
