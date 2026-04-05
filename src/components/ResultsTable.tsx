const results = [
  { model: "Qwen3-VL", startLoc: "0.48", goalLoc: "0.20", avoidObs: "0.84", trajEff: "0.47" },
  { model: "Gemini Robotics ER-1.5", startLoc: "0.58", goalLoc: "0.34", avoidObs: "0.89", trajEff: "0.58" },
  { model: "GPT-5-mini", startLoc: "0.75", goalLoc: "0.51", avoidObs: "0.91", trajEff: "0.64" },
];

export function ResultsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b-2 border-border">
            <th className="text-left py-3 px-4 font-semibold text-[hsl(var(--text-primary))]">Model</th>
            <th className="text-center py-3 px-4 font-semibold text-[hsl(var(--text-primary))]">Start loc.</th>
            <th className="text-center py-3 px-4 font-semibold text-[hsl(var(--text-primary))]">Goal loc.</th>
            <th className="text-center py-3 px-4 font-semibold text-[hsl(var(--text-primary))]">Avoid obs.</th>
            <th className="text-center py-3 px-4 font-semibold text-[hsl(var(--text-primary))]">Traj. eff.</th>
          </tr>
        </thead>
        <tbody>
          {results.map((row, index) => (
            <tr 
              key={row.model} 
              className={`border-b border-border transition-colors hover:bg-muted/50 ${index === 2 ? 'bg-primary/5' : ''}`}
            >
              <td className="py-3 px-4 font-medium">{row.model}</td>
              <td className="py-3 px-4 text-center text-muted-foreground">{row.startLoc}</td>
              <td className="py-3 px-4 text-center text-muted-foreground">{row.goalLoc}</td>
              <td className="py-3 px-4 text-center text-muted-foreground">{row.avoidObs}</td>
              <td className="py-3 px-4 text-center text-muted-foreground">{row.trajEff}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
