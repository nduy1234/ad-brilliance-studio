import { Button } from "@/components/ui/button";
import { Sparkles, Wand2, Target, Brain, Zap } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="relative py-20 md:py-32 px-6 overflow-hidden bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/20 text-xs font-medium text-success mb-4">
            <span>New!</span>
            <span className="text-muted-foreground">AI Scorekeeper Agents Now Available</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-foreground leading-[1.1]">
            AI ad testing
            <br />
            <span className="italic">built for marketers</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Upload or generate ad variations, run AI-powered tests with scorekeeper agents, 
            and get instant optimization recommendations to maximize your campaign performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              onClick={onGetStarted}
              className="font-semibold"
            >
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="font-semibold"
            >
              Get A Demo
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="p-6 rounded-lg bg-card border hover:shadow-md transition-all duration-200">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Wand2 className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-base font-semibold mb-2">Ad Generation</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Create multiple ad variations instantly with AI or upload your own creatives
            </p>
          </div>

          <div className="p-6 rounded-lg bg-card border hover:shadow-md transition-all duration-200">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Brain className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-base font-semibold mb-2">Scorekeeper Agents</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI agents evaluate your ads across engagement, clarity, and relevance metrics
            </p>
          </div>

          <div className="p-6 rounded-lg bg-card border hover:shadow-md transition-all duration-200">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Target className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-base font-semibold mb-2">Predictive Trials</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Get instant results without waiting for real-world A/B testing cycles
            </p>
          </div>

          <div className="p-6 rounded-lg bg-card border hover:shadow-md transition-all duration-200">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-base font-semibold mb-2">Optimization</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Receive actionable recommendations to improve your ad performance
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-8">
            <div className="text-5xl md:text-6xl font-bold text-foreground mb-2">94%</div>
            <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
          </div>
          
          <div className="text-center p-8">
            <div className="text-5xl md:text-6xl font-bold text-foreground mb-2">10x</div>
            <div className="text-sm text-muted-foreground">Faster Testing</div>
          </div>
          
          <div className="text-center p-8">
            <div className="text-5xl md:text-6xl font-bold text-foreground mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Testing Metrics</div>
          </div>
        </div>
      </div>
    </section>
  );
};
