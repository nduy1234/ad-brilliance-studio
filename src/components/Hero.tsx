import { Button } from "@/components/ui/button";
import { Sparkles, Wand2, BarChart3, Trophy, Target, Brain, Zap } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-accent/8 to-background -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.12),transparent_50%)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--accent)/0.12),transparent_50%)] -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 opacity-20" />
      
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-8 hover:bg-primary/15 transition-colors">
            <Sparkles className="w-4 h-4" />
            AI-Powered Multimodal Ad Testing
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
            <span className="inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-700">
              Test & Optimize
            </span>
            <br />
            <span className="inline-block text-foreground animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">Your Ads with AI</span>
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
          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-primary/20 group-hover:shadow-xl group-hover:shadow-primary/30">
              <Wand2 className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="relative z-10 text-lg font-bold mb-3">Ad Generation</h3>
            <p className="relative z-10 text-muted-foreground text-sm leading-relaxed">
              Create multiple ad variations with different AI models
            </p>
          </div>

          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent-glow flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-accent/20 group-hover:shadow-xl group-hover:shadow-accent/30">
              <Brain className="w-7 h-7 text-accent-foreground" />
            </div>
            <h3 className="relative z-10 text-lg font-bold mb-3">Scorekeeper Agents</h3>
            <p className="relative z-10 text-muted-foreground text-sm leading-relaxed">
              Each agent evaluates one metric with detailed reasoning
            </p>
          </div>

          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-primary/20 group-hover:shadow-xl group-hover:shadow-primary/30">
              <Target className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="relative z-10 text-lg font-bold mb-3">Predictive Trials</h3>
            <p className="relative z-10 text-muted-foreground text-sm leading-relaxed">
              Forecast winners using synthetic user modeling
            </p>
          </div>

          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent-glow flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-accent/20 group-hover:shadow-xl group-hover:shadow-accent/30">
              <Zap className="w-7 h-7 text-accent-foreground" />
            </div>
            <h3 className="relative z-10 text-lg font-bold mb-3">Optimization</h3>
            <p className="relative z-10 text-muted-foreground text-sm leading-relaxed">
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
