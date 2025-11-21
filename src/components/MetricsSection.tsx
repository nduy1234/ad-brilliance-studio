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
    <section className="py-16 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Select Testing Metrics</h2>
          <p className="text-lg text-muted-foreground">Choose which aspects our AI scorekeeper agents will evaluate</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {availableMetrics.map((metric) => {
            const Icon = metric.icon;
            const isSelected = selectedMetrics.includes(metric.id);
            
            return (
              <Card 
                key={metric.id}
                className={`group p-8 cursor-pointer transition-all duration-300 ${
                  isSelected 
                    ? 'border-2 border-primary shadow-lg bg-primary/5 scale-105' 
                    : 'border-2 border-border/50 hover:border-primary/30 hover:shadow-md hover:scale-102'
                }`}
                onClick={() => toggleMetric(metric.id)}
              >
                <div className="flex items-start gap-4">
                  <Checkbox 
                    checked={isSelected}
                    onCheckedChange={() => toggleMetric(metric.id)}
                    className="mt-1.5 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-primary/20' : 'bg-muted'
                      }`}>
                        <Icon className={`w-5 h-5 transition-colors ${
                          isSelected ? 'text-primary' : 'text-muted-foreground'
                        }`} />
                      </div>
                      <h3 className="font-bold text-lg">{metric.label}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{metric.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center space-y-4">
          <Button 
            size="lg"
            onClick={() => onRunTest(selectedMetrics)}
            disabled={selectedMetrics.length === 0}
            className="px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Run AI Test ({selectedMetrics.length} {selectedMetrics.length === 1 ? 'metric' : 'metrics'})
          </Button>
          {selectedMetrics.length === 0 && (
            <p className="text-sm text-muted-foreground">Select at least one metric to continue</p>
          )}
        </div>
      </div>
    </section>
  );
};
