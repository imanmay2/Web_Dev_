type Props = {
  title: string;
  value: string;
  subText?: string;
  valueColor?: string;
};

export function StatCard({ title, value, subText, valueColor }: Props) {
  return (
    <div className="bg-card p-6 rounded-xl border border-border w-full">
      <p className="text-gray-400 text-sm">{title}</p>
      <h2 className={`text-3xl font-semibold mt-2 ${valueColor}`}>
        {value}
      </h2>
      {subText && <p className="text-sm mt-2 text-gray-400">{subText}</p>}
    </div>
  );
}
