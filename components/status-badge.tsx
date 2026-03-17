interface StatusBadgeProps {
  service: string;
  status: "healthy" | "degraded" | "down";
}

const STATUS_COLORS: Record<StatusBadgeProps["status"], string> = {
  healthy: "#4CAF50",
  degraded: "#f59e0b",
  down: "#ef4444",
};

export function StatusBadge({ service, status }: StatusBadgeProps) {
  const color = STATUS_COLORS[status];

  return (
    <div
      className="flex items-center gap-3 rounded-lg p-4 border"
      style={{ borderColor: "#3c3c3c", backgroundColor: "#1A1A1A" }}
    >
      <span
        className="w-2.5 h-2.5 rounded-full shrink-0"
        style={{ backgroundColor: color }}
      />
      <div>
        <p className="font-mono text-sm" style={{ color: "#EBEBEB" }}>
          {service}
        </p>
        <p
          className="font-mono text-xs capitalize"
          style={{ color }}
        >
          {status}
        </p>
      </div>
    </div>
  );
}
