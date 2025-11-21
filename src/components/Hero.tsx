import { Button } from "@/components/ui/button";
import { Sparkles, Wand2, BarChart3, Trophy, Target, Brain, Zap } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.05),transparent_50%)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(var(--accent)/0.05),transparent_50%)] -z-10" />
      
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-8 hover:bg-primary/15 transition-colors">
            <Sparkles className="w-4 h-4" />
            AI-Powered Multimodal Ad Testing
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Test & Optimize
            </span>
            <br />
            <span className="text-foreground">Your Ads with AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Generate ad variations, run multimodal AI tests with scorekeeper agents, 
            and get predictive insights to maximize campaign performance.
          </p>
          
          <Button size="lg" onClick={onGetStarted} className="text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all">
            Get Started Free
            <Sparkles className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="group p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Wand2 className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-bold mb-3">Ad Generation</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Create multiple ad variations with different AI models
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/30 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Brain className="w-7 h-7 text-accent-foreground" />
            </div>
            <h3 className="text-lg font-bold mb-3">Scorekeeper Agents</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Each agent evaluates one metric with detailed reasoning
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-bold mb-3">Predictive Trials</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Forecast winners using synthetic user modeling
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/30 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Zap className="w-7 h-7 text-accent-foreground" />
            </div>
            <h3 className="text-lg font-bold mb-3">Optimization</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Get automated recommendations to improve results
            </p>
          </div>
        </div>

        {/* Value Props */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <p className="text-muted-foreground">Prediction Accuracy</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">10x</div>
            <p className="text-muted-foreground">Faster Testing</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">6+</div>
            <p className="text-muted-foreground">Testing Metrics</p>
          </div>
        </div>
      </div>
    </section>
  );
};
