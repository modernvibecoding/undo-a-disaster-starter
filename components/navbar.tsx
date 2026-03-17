import Link from "next/link";

export function Navbar() {
  return (
    <nav
      className="flex items-center justify-between px-6 py-4 border-b"
      style={{ backgroundColor: "#141414", borderColor: "#3c3c3c" }}
    >
      <Link
        href="/"
        className="font-mono font-bold text-sm tracking-widest uppercase"
        style={{ color: "#F5C754" }}
      >
        Meridian
      </Link>

      <div className="flex items-center gap-6">
        <Link
          href="/"
          className="font-mono text-xs"
          style={{ color: "#8A8A8A" }}
        >
          Home
        </Link>
        <Link
          href="/dashboard"
          className="font-mono text-xs"
          style={{ color: "#8A8A8A" }}
        >
          Dashboard
        </Link>
        <Link
          href="/status"
          className="font-mono text-xs"
          style={{ color: "#8A8A8A" }}
        >
          Status
        </Link>
      </div>
    </nav>
  );
}
