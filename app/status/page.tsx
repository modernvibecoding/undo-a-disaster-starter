import { StatusBadge } from "@/components/status-badge";

export default function StatusPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1
        className="font-mono text-2xl font-bold mb-6"
        style={{ color: "#EBEBEB" }}
      >
        System Status
      </h1>
      <div className="space-y-3">
        <StatusBadge service="API Gateway" status="healthy" />
        <StatusBadge service="Database" status="healthy" />
        <StatusBadge service="CDN" status="healthy" />
      </div>
    </main>
  );
}
