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
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">
              AdScore
            </span>
          </div>
          
          {currentStep !== "hero" && (
            <Button
              variant="ghost"
              onClick={handleBack}
              className="gap-2"
            >
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
      <footer className="border-t bg-background mt-auto">
        <div className="container px-4 py-6 text-center text-sm text-muted-foreground">
          <p>© 2024 AdScore. Powered by advanced AI scorekeeper agents.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
