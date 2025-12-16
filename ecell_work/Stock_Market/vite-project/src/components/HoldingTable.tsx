import { holdings } from "../holdings";
import { HoldingRow } from "./HoldingRow";

export function HoldingsTable() {
  return (
    <div className="bg-card rounded-xl border border-border mt-6 overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-[#1a1b5e] text-gray-400 text-sm">
          <tr>
            <th className="p-4">Symbol</th>
            <th>Type</th>
            <th>Qty</th>
            <th>Avg Price</th>
            <th>Current</th>
            <th>Market Value</th>
            <th>P/L</th>
          </tr>
        </thead>

        <tbody>
          {holdings.map((h) => (
            <HoldingRow key={h.symbol} h={h} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
