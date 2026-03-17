import { StatusBadge } from "@/components/status-badge";

export default function StatusPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="font-mono text-2xl font-bold mb-6" style={{ color: "#EBEBEB" }}>System Status — v2</h1>
      <div className="grid grid-cols-3 gap-4">
        <StatusBadge service="API Gateway" status="healthy" />
        <StatusBadge service="Database" status="healthy" />
        <StatusBadge service="CDN" status="degraded" />
      </div>
    </main>
  );
}
