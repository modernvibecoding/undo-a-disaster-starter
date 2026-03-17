export async function GET() {
  // This endpoint references a deleted module
  const { StatusBadge } = await import("@/components/status-badge");
  return Response.json({ status: "broken" });
}
