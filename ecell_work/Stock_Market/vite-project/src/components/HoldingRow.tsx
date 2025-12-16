import { Pill } from "./Pill";

export function HoldingRow({ h }: any) {
  const profit = h.pl >= 0;

  return (
    <tr className="border-b border-border text-white">
      <td className="py-4">
        <div className="font-semibold">{h.symbol}</div>
        <div className="text-gray-400 text-sm">{h.name}</div>
      </td>

      <td>
        <Pill label={h.type === "long" ? "↑ Long" : "↓ Short"} type={h.type} />
      </td>

      <td>{h.qty}</td>
      <td>${h.avg}</td>
      <td>${h.price}</td>
      <td>${h.value}</td>

      <td className={profit ? "text-success" : "text-danger"}>
        {profit ? "+" : ""}${h.pl} ({h.percent}%)
      </td>
    </tr>
  );
}
