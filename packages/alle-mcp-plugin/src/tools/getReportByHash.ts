// packages/alle-mcp-plugin/src/tools/getReportByHash.ts

export const getReportByHash = async (input: { mediaHash: string }) => {
  if (!input.mediaHash) {
    throw new Error("mediaHash is required");
  }

  const endpoint = process.env.DKG_ENDPOINT || "http://localhost:8900/query";

  const res = await fetch(`${endpoint}?hash=${input.mediaHash}`);
  if (!res.ok) {
    throw new Error("Failed to fetch from DKG");
  }

  const data = await res.json();

  return {
    message: "Knowledge Asset retrieved",
    asset: data,
  };
};
