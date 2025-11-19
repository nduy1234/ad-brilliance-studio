import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Target, Eye, MessageSquare, TrendingUp, Award, Heart } from "lucide-react";

interface MetricsSectionProps {
  onRunTest: (metrics: string[]) => void;
}

const availableMetrics = [
  { id: "engagement", label: "Engagement", icon: Heart, description: "Likelihood to interact" },
  { id: "clarity", label: "Clarity", icon: Eye, description: "Message comprehension" },
  { id: "relevance", label: "Relevance", icon: Target, description: "Audience fit" },
  { id: "emotional", label: "Emotional Impact", icon: MessageSquare, description: "Emotional resonance" },
  { id: "cta", label: "CTA Strength", icon: TrendingUp, description: "Call-to-action effectiveness" },
  { id: "brand", label: "Brand Alignment", icon: Award, description: "Brand consistency" },
];

export const MetricsSection = ({ onRunTest }: MetricsSectionProps) => {
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>(["engagement", "clarity"]);

  const toggleMetric = (metricId: string) => {
    setSelectedMetrics(prev => 
      prev.includes(metricId) 
        ? prev.filter(id => id !== metricId)
        : [...prev, metricId]
    );
  };

  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Select Testing Metrics</h2>
          <p className="text-lg text-muted-foreground">Choose what aspects to evaluate</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          {availableMetrics.map((metric) => {
            const Icon = metric.icon;
            const isSelected = selectedMetrics.includes(metric.id);
            
            return (
              <Card 
                key={metric.id}
                className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
                  isSelected ? 'border-2 border-primary shadow-md' : 'border-2 border-transparent'
                }`}
                onClick={() => toggleMetric(metric.id)}
              >
                <div className="flex items-start gap-4">
                  <Checkbox 
                    checked={isSelected}
                    onCheckedChange={() => toggleMetric(metric.id)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className={`w-5 h-5 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`} />
                      <h3 className="font-semibold">{metric.label}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{metric.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            onClick={() => onRunTest(selectedMetrics)}
            disabled={selectedMetrics.length === 0}
            className="shadow-lg"
          >
            Run AI Test ({selectedMetrics.length} metrics)
          </Button>
        </div>
      </div>
    </section>
  );
};
