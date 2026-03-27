const results = [
  { model: "Gemini Robotics ER-1.5", avgRank: "—", winRate: "—", top1: "—" },
  { model: "GPT-5-mini", avgRank: "—", winRate: "—", top1: "—" },
  { model: "Qwen3-VL", avgRank: "—", winRate: "—", top1: "—" },
];

export function ResultsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b-2 border-border">
            <th className="text-left py-3 px-4 font-semibold text-[hsl(var(--text-primary))]">Model</th>
            <th className="text-center py-3 px-4 font-semibold text-[hsl(var(--text-primary))]">Avg. Rank</th>
            <th className="text-center py-3 px-4 font-semibold text-[hsl(var(--text-primary))]">Win Rate (%)</th>
            <th className="text-center py-3 px-4 font-semibold text-[hsl(var(--text-primary))]">Top-1 (%)</th>
          </tr>
        </thead>
        <tbody>
          {results.map((row, index) => (
            <tr 
              key={row.model} 
              className={`border-b border-border transition-colors hover:bg-muted/50 ${index === 0 ? 'bg-primary/5' : ''}`}
            >
              <td className="py-3 px-4 font-medium">{row.model}</td>
              <td className="py-3 px-4 text-center text-muted-foreground">{row.avgRank}</td>
              <td className="py-3 px-4 text-center text-muted-foreground">{row.winRate}</td>
              <td className="py-3 px-4 text-center text-muted-foreground">{row.top1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
