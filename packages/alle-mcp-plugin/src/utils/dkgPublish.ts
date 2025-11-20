// packages/alle-mcp-plugin/src/utils/dkgPublish.ts

export async function publishToDKG(asset: any): Promise<string> {
  const endpoint =
    process.env.DKG_PUBLISH || "http://localhost:8900/publish";

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(asset),
  });

  if (!res.ok) {
    throw new Error("Failed to publish asset to DKG");
  }

  const data = await res.json();
  return data.ual;
}
