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
    <section className="py-20 bg-gradient-to-b from-secondary/30 via-background to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold mb-6">
            <Target className="w-4 h-4" />
            Step 2 of 3
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Select Testing Metrics</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Choose which aspects our AI scorekeeper agents will evaluate</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {availableMetrics.map((metric) => {
            const Icon = metric.icon;
            const isSelected = selectedMetrics.includes(metric.id);
            
            return (
              <Card 
                key={metric.id}
                className={`group relative p-8 cursor-pointer transition-all duration-500 overflow-hidden ${
                  isSelected 
                    ? 'border-2 border-primary shadow-2xl bg-primary/5 scale-[1.02]' 
                    : 'border-2 border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.01]'
                }`}
                onClick={() => toggleMetric(metric.id)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-500 ${
                  isSelected ? 'from-primary/10 to-transparent opacity-100' : 'from-primary/5 to-transparent opacity-0 group-hover:opacity-100'
                }`} />
                <div className="relative z-10 flex items-start gap-4">
                  <Checkbox 
                    checked={isSelected}
                    onCheckedChange={() => toggleMetric(metric.id)}
                    className="mt-2 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 shadow-lg ${
                        isSelected ? 'bg-primary/20 shadow-primary/20' : 'bg-muted group-hover:bg-primary/10'
                      }`}>
                        <Icon className={`w-6 h-6 transition-colors duration-300 ${
                          isSelected ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
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

        <div className="text-center space-y-5">
          <Button 
            size="lg"
            onClick={() => onRunTest(selectedMetrics)}
            disabled={selectedMetrics.length === 0}
            className="px-12 py-7 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50"
          >
            Run AI Test ({selectedMetrics.length} {selectedMetrics.length === 1 ? 'metric' : 'metrics'})
          </Button>
          {selectedMetrics.length === 0 && (
            <p className="text-sm text-muted-foreground animate-pulse">Select at least one metric to continue</p>
          )}
        </div>
      </div>
    </section>
  );
};
