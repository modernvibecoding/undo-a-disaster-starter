import { Hero } from "@/components/hero";

const FEATURES = [
  { title: "Real-time Monitoring", desc: "Track service health across your entire stack." },
  { title: "Incident Alerts", desc: "Get notified before your users notice downtime." },
  { title: "Performance Analytics", desc: "Latency percentiles, error rates, and throughput." },
];

export default function Page() {
  return (
    <div className="min-h-screen">
      <Hero />

      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2
          className="font-mono text-xs tracking-[0.15em] uppercase mb-6"
          style={{ color: "#F5C754" }}
        >
          Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-lg p-4 border"
              style={{ borderColor: "#3c3c3c", backgroundColor: "#1A1A1A" }}
            >
              <h3
                className="font-mono text-sm font-bold"
                style={{ color: "#EBEBEB" }}
              >
                {f.title}
              </h3>
              <p
                className="font-mono text-xs mt-2 leading-relaxed"
                style={{ color: "#8A8A8A" }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
