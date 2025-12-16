type Props = {
  label: string;
  type: "long" | "short";
};

export function Pill({ label, type }: Props) {
  const styles =
    type === "long"
      ? "bg-green-900 text-success"
      : "bg-red-900 text-danger";

  return (
    <span className={`px-3 py-1 rounded-full text-sm ${styles}`}>
      {label}
    </span>
  );
}
