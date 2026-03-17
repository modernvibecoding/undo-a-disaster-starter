import { DashboardCard } from "@/components/dashboard-card";

const STATS = [
  { title: "Uptime", value: "99.9%" },
  { title: "Requests", value: "12.4k" },
  { title: "Errors", value: "23" },
  { title: "Latency", value: "45ms" },
];

export default function DashboardPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1
        className="font-mono text-2xl font-bold mb-6"
        style={{ color: "#EBEBEB" }}
      >
        Dashboard
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {STATS.map((s) => (
          <DashboardCard key={s.title} title={s.title} value={s.value} />
        ))}
      </div>
    </main>
  );
}
