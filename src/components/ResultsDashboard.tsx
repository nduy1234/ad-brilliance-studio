import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, TrendingUp, Download } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface ResultsDashboardProps {
  images: string[];
  metrics: string[];
}

// Mock data generator
const generateMockResults = (imageCount: number, metrics: string[]) => {
  return Array.from({ length: imageCount }, (_, i) => ({
    id: i,
    scores: metrics.reduce((acc, metric) => {
      acc[metric] = Math.floor(Math.random() * 30) + 70; // 70-100 range
      return acc;
    }, {} as Record<string, number>),
    overallScore: Math.floor(Math.random() * 20) + 80,
  }));
};

export const ResultsDashboard = ({ images, metrics }: ResultsDashboardProps) => {
  const results = generateMockResults(images.length, metrics);
  const winner = results.reduce((max, r) => r.overallScore > max.overallScore ? r : max);
  const confidence = 85 + Math.floor(Math.random() * 10); // 85-95%

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Test Results</h2>
          <p className="text-lg text-muted-foreground">AI analysis complete</p>
        </div>

        {/* Winner Card */}
        <Card className="max-w-3xl mx-auto p-8 mb-8 border-2 border-primary/50 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold">Predicted Winner</h3>
            <Badge variant="default" className="ml-auto">
              {confidence}% confidence
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <img 
              src={images[winner.id]} 
              alt="Winner"
              className="w-full rounded-lg shadow-lg"
            />
            <div>
              <div className="text-5xl font-bold text-primary mb-2">
                {winner.overallScore}
              </div>
              <p className="text-muted-foreground mb-4">Overall Score</p>
              
              <div className="space-y-3">
                {metrics.map(metric => (
                  <div key={metric}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="capitalize">{metric}</span>
                      <span className="font-semibold">{winner.scores[metric]}</span>
                    </div>
                    <Progress value={winner.scores[metric]} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Comparison Grid */}
        <div className="max-w-6xl mx-auto mb-8">
          <h3 className="text-2xl font-bold mb-6">All Variations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((result, index) => (
              <Card key={index} className={`p-6 ${index === winner.id ? 'border-2 border-primary' : ''}`}>
                <div className="relative mb-4">
                  <img 
                    src={images[index]} 
                    alt={`Variation ${index + 1}`}
                    className="w-full rounded-lg"
                  />
                  {index === winner.id && (
                    <Badge className="absolute top-2 right-2">
                      <Trophy className="w-3 h-3 mr-1" />
                      Winner
                    </Badge>
                  )}
                </div>
                
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-primary">{result.overallScore}</div>
                  <p className="text-sm text-muted-foreground">Overall Score</p>
                </div>

                <div className="space-y-2">
                  {metrics.map(metric => (
                    <div key={metric} className="flex justify-between text-sm">
                      <span className="capitalize text-muted-foreground">{metric}</span>
                      <span className="font-semibold">{result.scores[metric]}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <Card className="max-w-3xl mx-auto p-8 bg-accent/5 border-accent/20">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-accent" />
            <h3 className="text-xl font-bold">Optimization Recommendations</h3>
          </div>
          
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">•</span>
              <span>The winning variation excels in emotional impact and clarity</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">•</span>
              <span>Consider A/B testing the top 2 variations with real traffic</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">•</span>
              <span>CTA placement in the winner drives higher engagement scores</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">•</span>
              <span>Color scheme analysis suggests higher conversion potential</span>
            </li>
          </ul>

          <Button className="w-full" variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Download Full Report
          </Button>
        </Card>
      </div>
    </section>
  );
};
