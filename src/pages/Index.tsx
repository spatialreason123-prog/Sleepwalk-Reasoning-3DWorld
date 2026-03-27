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
            Images2Action: Benchmarking Vision-Language Models for Action Trajectory Prediction in Reconstructed 3D Environments
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
            Vision-Language Models (VLMs) excel at visual perception and language understanding, yet their ability to ground instructions into actionable, spatially consistent behavior in 3D scenes remains unclear. We introduce <strong>Images2Action</strong>, a benchmark for evaluating embodied reasoning in VLMs via action-conditioned path prediction in single-scene 3D environments reconstructed from language instructions. Unlike room-to-room navigation benchmarks, Images2Action focuses on localized, interaction-centric reasoning within individual scenes. Given visual observations and natural language instructions, models must infer plausible trajectories that enable an embodied agent to perform goal-directed actions while respecting scene geometry. We employ a MotionGPT-driven humanoid agent to execute these trajectories. We compare state-of-the-art VLMs using a standardized judge prompt, revealing substantial gaps in grounded spatial reasoning.
          </p>
        </section>

        {/* Methodology */}
        <section className="mb-16">
          <h2 className="section-heading">Methodology</h2>
          <div className="bg-muted rounded-xl overflow-hidden mb-4">
            <div id="methodology-diagram" className="aspect-[16/9] flex items-center justify-center" style={{
            backgroundImage: 'url(https://via.placeholder.com/1600x900/f1f5f9/64748b?text=Pipeline+Diagram)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
              <span className="sr-only">Methodology Diagram Placeholder</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground text-center italic">
            3D Scene Reconstruction (Hunyuan3D-2.5) → Trajectory Prediction (VLMs) → Humanoid Execution (MotionGPT) → Judge Ranking.
          </p>
        </section>

        {/* Results */}
        <section className="mb-16">
          <h2 className="section-heading">Results</h2>
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
            ECCV 2026 Submission
          </p>
        </footer>
      </div>
    </div>;
};
export default Index;