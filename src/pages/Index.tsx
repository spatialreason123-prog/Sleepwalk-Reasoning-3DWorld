import { TypingDemo } from "@/components/TypingDemo";
import { ResultsTable } from "@/components/ResultsTable";
import { Citation } from "@/components/Citation";
import { FileText, Github, Play } from "lucide-react";
const Index = () => {
  return <div className="min-h-screen bg-background py-12 md:py-20">
      <div className="academic-container">
        {/* Hero Section */}
        <header className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--text-primary))] leading-tight mb-6 text-balance">
            SleepWalk: Benchmarking Vision-Language Models for Action Trajectory Prediction in Reconstructed 3D Environments
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Anonymous Authors
          </p>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#" className="paper-link">
              <FileText className="w-4 h-4" />
              Paper
            </a>
            <a href="#" className="paper-link-outline">
              <Github className="w-4 h-4" />
              Code
            </a>
            <a href="#" className="paper-link-outline">
              <Play className="w-4 h-4" />
              Demo
            </a>
          </div>
        </header>

        {/* Interactive Demo */}
        <section className="mb-20">
          <TypingDemo />
        </section>

        {/* Abstract */}
        <section className="mb-16">
          <h2 className="section-heading">Abstract</h2>
          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-justify">
            Vision-Language Models (VLMs) excel at visual perception and language understanding, yet their ability to ground instructions into actionable, spatially consistent behavior in 3D scenes remains unclear. We introduce <strong>SleepWalk</strong>, a benchmark for evaluating embodied reasoning in VLMs via action-conditioned path prediction in single-scene 3D environments reconstructed from language instructions. Unlike room-to-room navigation benchmarks, SleepWalk focuses on localized, interaction-centric reasoning within individual scenes. Given visual observations and natural language instructions, models must infer plausible trajectories that enable an embodied agent to perform goal-directed actions while respecting scene geometry. We employ a MotionGPT-driven humanoid agent to execute these trajectories. We compare state-of-the-art VLMs using a standardized judge prompt, revealing substantial gaps in grounded spatial reasoning.
          </p>
        </section>

        {/* Methodology */}
        <section className="mb-16">
          <h2 className="section-heading">Methodology</h2>
          <div className="bg-muted rounded-xl overflow-hidden mb-4 border border-border">
            <img 
              src="/Sleepwalk-Reasoning-3DWorld/overview.png"
              alt="Methodology Diagram: 3D Scene Reconstruction → Trajectory Prediction → Humanoid Execution → Judge Ranking" 
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-muted-foreground text-center italic">
            3D Scene Reconstruction (Hunyuan3D-2.5) → Trajectory Prediction (VLMs) → Humanoid Execution (MotionGPT) → Judge Ranking.
          </p>
        </section>

        {/* Results */}
        <section className="mb-16">
          <h2 className="section-heading">Results</h2>
          
          {/* Side-by-side model outputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="space-y-3">
              <div className="bg-muted rounded-xl aspect-[4/3] overflow-hidden border border-border">
                <img 
                  src="/Sleepwalk-Reasoning-3DWorld/gemini-result.png" 
                  alt="Gemini Robotics ER-1.5 Result" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center font-medium text-foreground">Gemini Robotics ER-1.5</p>
            </div>
            <div className="space-y-3">
              <div className="bg-muted rounded-xl aspect-[4/3] overflow-hidden border border-border">
                <img 
                  src="/Sleepwalk-Reasoning-3DWorld/gpt-result.png" 
                  alt="GPT-5-mini Result" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center font-medium text-foreground">GPT-5-mini</p>
            </div>
            <div className="space-y-3">
              <div className="bg-muted rounded-xl aspect-[4/3] overflow-hidden border border-border">
                <img 
                  src="/Sleepwalk-Reasoning-3DWorld/qwen-result.png" 
                  alt="Qwen3-VL Result" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center font-medium text-foreground">Qwen3-VL</p>
            </div>
          </div>

          <ResultsTable />
        </section>

        {/* Citation */}
        <section className="mb-16">
          <h2 className="section-heading">Citation</h2>
          <Citation />
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            COLM 2026 Submission
          </p>
        </footer>
      </div>
    </div>;
};
export default Index;
