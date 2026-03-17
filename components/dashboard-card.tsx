interface DashboardCardProps {
  title: string;
  value: string;
}

export function DashboardCard({ title, value }: DashboardCardProps) {
  return (
    <div
      className="rounded-lg p-5 border"
      style={{ borderColor: "#3c3c3c", backgroundColor: "#1A1A1A" }}
    >
      <p
        className="font-mono text-xs uppercase tracking-wider"
        style={{ color: "#8A8A8A" }}
      >
        {title}
      </p>
      <p
        className="font-mono text-2xl font-bold mt-2"
        style={{ color: "#EBEBEB" }}
      >
        {value}
      </p>
    </div>
  );
}
