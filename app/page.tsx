const CHECKLIST = [
  { done: true,  label: "Clean baseline established" },
  { done: false, label: "First safe checkpoint commit created" },
  { done: false, label: "Breaking change introduced in a new commit" },
  { done: false, label: "Disaster reversed cleanly — history intact" },
];

const TECH = ["Next.js 15", "TypeScript", "Git", "GitHub"];

export default function Page() {
  return (
    <div className="min-h-screen flex items-start justify-center p-6 pt-16">
      <div className="w-full max-w-xl space-y-5">

        {/* Header */}
        <div className="flex items-center gap-2.5">
          <span
            className="font-mono font-bold text-xs tracking-[0.2em] uppercase"
            style={{ color: "#F5C754" }}
          >
            STARTER
          </span>
          <span className="font-mono text-xs" style={{ color: "#3c3c3c" }}>//</span>
          <span className="font-mono text-xs" style={{ color: "#8A8A8A" }}>
            Undo a Disaster Cleanly
          </span>
          <div className="ml-auto flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#4CAF50" }}
            />
            <span className="font-mono text-xs" style={{ color: "#6E6E6E" }}>
              CHECKPOINT
            </span>
          </div>
        </div>

        <div className="border-t pt-5 space-y-4" style={{ borderColor: "#3c3c3c" }}>

          {/* Setup Checklist */}
          <div
            className="rounded-lg overflow-hidden border"
            style={{ borderColor: "#3c3c3c" }}
          >
            <div
              className="px-4 py-2.5 border-b"
              style={{ backgroundColor: "#1A1A1A", borderColor: "#3c3c3c" }}
            >
              <span
                className="font-mono text-xs tracking-[0.15em] uppercase"
                style={{ color: "#F5C754" }}
              >
                Exercise Checklist
              </span>
            </div>
            <div
              className="px-4 py-4 space-y-3"
              style={{ backgroundColor: "#282828" }}
            >
              {CHECKLIST.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span
                    className="font-mono text-sm w-4 shrink-0"
                    style={{ color: item.done ? "#4CAF50" : "#6E6E6E" }}
                  >
                    {item.done ? "✓" : "○"}
                  </span>
                  <span
                    className="font-mono text-sm"
                    style={{ color: item.done ? "#B0B0B0" : "#6E6E6E" }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Brief */}
          <div
            className="rounded-lg overflow-hidden border"
            style={{ borderColor: "rgba(212, 168, 67, 0.35)" }}
          >
            <div
              className="px-4 py-2.5 border-b"
              style={{ backgroundColor: "#1A1A1A", borderColor: "#3c3c3c" }}
            >
              <span
                className="font-mono text-xs tracking-[0.15em] uppercase"
                style={{ color: "#F5C754" }}
              >
                Mission Brief
              </span>
            </div>
            <div
              className="px-4 py-4"
              style={{ backgroundColor: "#282828" }}
            >
              <p
                className="font-mono text-sm leading-relaxed"
                style={{ color: "#B0B0B0" }}
              >
                This is your safe baseline. Commit it. Then intentionally
                break something in a new commit. Then use Git to reverse
                the disaster without losing the commit history.{" "}
                <span style={{ color: "#F5C754" }}>
                  The goal: a clean git log that tells the story.
                </span>
              </p>
            </div>
          </div>

          {/* Scenario note */}
          <div
            className="rounded-lg border px-4 py-3"
            style={{
              borderColor: "#3c3c3c",
              backgroundColor: "#1A1A1A",
            }}
          >
            <p className="font-mono text-xs" style={{ color: "#6E6E6E" }}>
              <span style={{ color: "#f59e0b" }}>hint</span>
              {" — "}see{" "}
              <span style={{ color: "#F5C754" }}>docs/disaster-scenario.md</span>
              {" "}for the step-by-step exercise guide
            </p>
          </div>

          {/* Tech Stack */}
          <div
            className="rounded-lg overflow-hidden border"
            style={{ borderColor: "#3c3c3c" }}
          >
            <div
              className="px-4 py-2.5 border-b"
              style={{ backgroundColor: "#1A1A1A", borderColor: "#3c3c3c" }}
            >
              <span
                className="font-mono text-xs tracking-[0.15em] uppercase"
                style={{ color: "#6E6E6E" }}
              >
                Tech Stack
              </span>
            </div>
            <div
              className="px-4 py-3 flex flex-wrap gap-2"
              style={{ backgroundColor: "#282828" }}
            >
              {TECH.map((t) => (
                <span
                  key={t}
                  className="border rounded px-2.5 py-1 font-mono text-xs"
                  style={{ borderColor: "#3c3c3c", color: "#8A8A8A" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Footer hint */}
          <p className="text-center font-mono text-xs" style={{ color: "#6E6E6E" }}>
            Open{" "}
            <span style={{ color: "#F5C754" }}>README.md</span>
            {" "}— follow the Quick Start guide
          </p>

        </div>
      </div>
    </div>
  );
}
