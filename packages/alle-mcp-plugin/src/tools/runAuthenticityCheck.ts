import { DeepfakeReport } from "../types/DeepfakeReport";
import { createKnowledgeAsset } from "../utils/knowledgeAsset";
import { publishToDKG } from "../utils/dkgPublish";
import { verifyPremiumPayment } from "../utils/x402";

interface RunInput {
  mediaUrl: string;
  premium?: boolean;
}

export const runAuthenticityCheck = async (input: RunInput) => {
  if (!input.mediaUrl) {
    throw new Error("mediaUrl is required");
  }

  if (input.premium) {
    await verifyPremiumPayment(input.mediaUrl);
  }

  const workerUrl =
    process.env.DETECTION_WORKER_URL || "http://localhost:9400/check";

  const res = await fetch(workerUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mediaUrl: input.mediaUrl }),
  });

  if (!res.ok) {
    throw new Error("Detection worker failed");
  }

  const report: DeepfakeReport = await res.json();

  const asset = createKnowledgeAsset(report);

  const ual = await publishToDKG(asset);

  return {
    summary: buildSummary(report),
    ual,
    report,
  };
};

function buildSummary(report: DeepfakeReport): string {
  const authenticity = report.isAuthentic ? "authentic" : "possibly fake";
  const scorePercent = Math.round(report.score * 100);
  return `Media appears ${authenticity}. Deepfake score ${scorePercent} percent.`;
}
