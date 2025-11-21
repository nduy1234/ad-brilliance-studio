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
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-success/10 border border-success/20 text-success text-sm font-semibold mb-6">
            <Trophy className="w-4 h-4" />
            Analysis Complete
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Test Results</h2>
          <p className="text-lg text-muted-foreground">AI scorekeeper agents have evaluated your ad variations</p>
        </div>

        {/* Winner Card */}
        <Card className="max-w-4xl mx-auto p-10 mb-12 border-2 border-primary/50 bg-gradient-to-br from-primary/10 via-accent/5 to-background shadow-xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Trophy className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-3xl font-bold">Predicted Winner</h3>
            <Badge variant="default" className="ml-auto text-base px-4 py-1.5">
              {confidence}% confidence
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
              <img 
                src={images[winner.id]} 
                alt="Winner"
                className="relative w-full rounded-xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div>
                <div className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {winner.overallScore}
                </div>
                <p className="text-lg text-muted-foreground">Overall Score</p>
              </div>
              
              <div className="space-y-4">
                {metrics.map(metric => (
                  <div key={metric} className="p-4 rounded-lg bg-card/50 border border-border/50">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="capitalize font-semibold">{metric}</span>
                      <span className="font-bold text-primary">{winner.scores[metric]}</span>
                    </div>
                    <Progress value={winner.scores[metric]} className="h-2.5" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Comparison Grid */}
        <div className="max-w-6xl mx-auto mb-12">
          <h3 className="text-3xl font-bold mb-8">All Variations Comparison</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <Card key={index} className={`group p-6 hover:shadow-xl transition-all duration-300 ${
                index === winner.id ? 'border-2 border-primary shadow-lg' : 'border border-border'
              }`}>
                <div className="relative mb-6">
                  <div className="relative overflow-hidden rounded-xl">
                    <img 
                      src={images[index]} 
                      alt={`Variation ${index + 1}`}
                      className="w-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {index === winner.id && (
                    <Badge className="absolute top-3 right-3 text-sm px-3 py-1.5 shadow-lg">
                      <Trophy className="w-3.5 h-3.5 mr-1" />
                      Winner
                    </Badge>
                  )}
                </div>
                
                <div className="text-center mb-6 pb-6 border-b border-border">
                  <div className="text-4xl font-bold text-primary mb-1">{result.overallScore}</div>
                  <p className="text-sm text-muted-foreground font-medium">Overall Score</p>
                </div>

                <div className="space-y-3">
                  {metrics.map(metric => (
                    <div key={metric} className="flex justify-between items-center text-sm p-2 rounded-lg hover:bg-muted/50 transition-colors">
                      <span className="capitalize text-muted-foreground font-medium">{metric}</span>
                      <span className="font-bold text-foreground">{result.scores[metric]}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <Card className="max-w-4xl mx-auto p-10 bg-gradient-to-br from-accent/10 to-background border-2 border-accent/30 shadow-lg">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-bold">Automated Optimization Recommendations</h3>
          </div>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-accent/30 transition-colors">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">1</span>
              <span className="leading-relaxed">The winning variation excels in emotional impact and clarity - consider using similar visual elements in future campaigns</span>
            </li>
            <li className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-accent/30 transition-colors">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">2</span>
              <span className="leading-relaxed">Consider A/B testing the top 2 variations with real traffic to validate AI predictions</span>
            </li>
            <li className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-accent/30 transition-colors">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">3</span>
              <span className="leading-relaxed">CTA placement in the winner drives higher engagement scores - replicate this positioning</span>
            </li>
            <li className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-accent/30 transition-colors">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">4</span>
              <span className="leading-relaxed">Color scheme analysis suggests higher conversion potential with the winner's palette</span>
            </li>
          </ul>

          <Button className="w-full text-base py-6 shadow-lg hover:shadow-xl transition-all" variant="default">
            <Download className="w-5 h-5 mr-2" />
            Download Full Report & Analysis
          </Button>
        </Card>
      </div>
    </section>
  );
};
