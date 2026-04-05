import { useState } from "react";

const BIBTEX = `@inproceedings{SleepWalk2026,
  title={SleepWalk: Benchmarking Vision-Language Models for Action Trajectory Prediction in Reconstructed 3D Environments},
  author={Anonymous},
  booktitle={Conference on Language Modeling (COLM)},
  year={2026}
}`;

export function Citation() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(BIBTEX);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
        title="Copy to clipboard"
      >
        {copied ? (
          <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-[hsl(var(--code-text))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )}
      </button>
      <pre className="code-block">
        <code>{BIBTEX}</code>
      </pre>
    </div>
  );
}
