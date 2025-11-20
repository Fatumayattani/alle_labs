// packages/alle-mcp-plugin/src/utils/knowledgeAsset.ts

import { DeepfakeReport } from "../types/DeepfakeReport";

export function createKnowledgeAsset(report: DeepfakeReport) {
  return {
    "@context": "https://schema.origintrail.io/alle-labs/context.json",
    "@type": "alle:AuthenticityAssessment",
    "alle:mediaHash": report.mediaHash,
    "alle:mediaUrl": report.mediaUrl,
    "alle:isAuthentic": report.isAuthentic,
    "alle:score": report.score,
    "alle:confidence": report.confidence,
    "alle:modelVersion": report.modelVersion,
    "alle:checkedAt": report.checkedAt,
    "alle:checkedBy": "did:polkadot:allelabs",
    "alle:explanation": report.explanation,
  };
}
