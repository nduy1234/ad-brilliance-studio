import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Upload, Wand2, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UploadSectionProps {
  onNext: (images: string[]) => void;
}

export const UploadSection = ({ onNext }: UploadSectionProps) => {
  const [images, setImages] = useState<string[]>([]);
  const [generatePrompt, setGeneratePrompt] = useState("");
  const { toast } = useToast();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImages(prev => [...prev, event.target?.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleGenerate = () => {
    if (!generatePrompt.trim()) {
      toast({
        title: "Enter a prompt",
        description: "Please describe the ad you want to generate",
        variant: "destructive",
      });
      return;
    }
    
    // Placeholder for AI generation
    toast({
      title: "Generation started",
      description: "Your ad variations are being generated...",
    });
    
    // Mock generated images
    const mockImages = [
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&h=600&fit=crop"
    ];
    setImages(prev => [...prev, ...mockImages]);
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Upload or Generate Your Ads</h2>
          <p className="text-lg text-muted-foreground">Add multiple variations to test and compare performance</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-10">
          {/* Upload Card */}
          <Card className="group p-10 border-2 border-dashed border-border/60 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 cursor-pointer">
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                <Upload className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Upload Ads</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">Upload your existing ad creatives for AI analysis</p>
              <Input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileUpload}
                className="cursor-pointer hover:border-primary transition-colors"
              />
            </div>
          </Card>

          {/* Generate Card */}
          <Card className="group p-10 border-2 border-dashed border-border/60 hover:border-accent/60 hover:bg-accent/5 transition-all duration-300">
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all">
                <Wand2 className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Generate with AI</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">Describe your ad concept and let AI create variations</p>
              <div className="flex gap-3">
                <Input
                  placeholder="e.g., Modern tech product launch..."
                  value={generatePrompt}
                  onChange={(e) => setGeneratePrompt(e.target.value)}
                  className="text-base"
                />
                <Button onClick={handleGenerate} className="whitespace-nowrap px-6 hover:shadow-lg transition-shadow">
                  Generate
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Preview Grid */}
        {images.length > 0 && (
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Ad Variations ({images.length})</h3>
              <p className="text-muted-foreground">Ready for AI testing</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
              {images.map((image, index) => (
                <div key={index} className="relative group">
                  <div className="relative overflow-hidden rounded-xl border border-border shadow-md hover:shadow-xl transition-all duration-300">
                    <img 
                      src={image} 
                      alt={`Ad ${index + 1}`}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => removeImage(index)}
                        className="absolute top-3 right-3 p-2 bg-destructive text-destructive-foreground rounded-lg shadow-lg hover:scale-110 transition-transform"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 text-center text-sm font-medium text-muted-foreground">
                    Variation {index + 1}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button 
                size="lg"
                onClick={() => onNext(images)}
                disabled={images.length < 2}
                className="px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Continue to Metrics
              </Button>
              {images.length < 2 && (
                <p className="text-sm text-muted-foreground mt-3">Add at least 2 variations to continue</p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
