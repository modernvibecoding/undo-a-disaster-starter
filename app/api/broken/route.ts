export async function GET() {
  const { StatusBadge } = await import("@/components/status-badge");
  return Response.json({ status: "broken" });
}
