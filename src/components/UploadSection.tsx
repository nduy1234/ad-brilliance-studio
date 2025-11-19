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
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Upload or Generate Your Ads</h2>
          <p className="text-lg text-muted-foreground">Add variations to test and compare</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
          {/* Upload Card */}
          <Card className="p-8 border-2 border-dashed hover:border-primary/50 transition-colors">
            <div className="text-center">
              <Upload className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Upload Ads</h3>
              <p className="text-muted-foreground mb-6">Upload your existing ad creatives</p>
              <Input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileUpload}
                className="cursor-pointer"
              />
            </div>
          </Card>

          {/* Generate Card */}
          <Card className="p-8 border-2 border-dashed hover:border-accent/50 transition-colors">
            <div className="text-center">
              <Wand2 className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Generate with AI</h3>
              <p className="text-muted-foreground mb-6">Describe your ad concept</p>
              <div className="flex gap-2">
                <Input
                  placeholder="e.g., Modern tech product launch..."
                  value={generatePrompt}
                  onChange={(e) => setGeneratePrompt(e.target.value)}
                />
                <Button onClick={handleGenerate} className="whitespace-nowrap">
                  Generate
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Preview Grid */}
        {images.length > 0 && (
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Ad Variations ({images.length})</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
              {images.map((image, index) => (
                <div key={index} className="relative group">
                  <img 
                    src={image} 
                    alt={`Ad ${index + 1}`}
                    className="w-full aspect-square object-cover rounded-lg shadow-md"
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 p-1 bg-destructive text-destructive-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button 
                size="lg" 
                onClick={() => onNext(images)}
                disabled={images.length < 2}
              >
                Continue to Metrics
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
