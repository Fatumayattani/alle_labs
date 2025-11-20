// packages/alle-mcp-plugin/src/types/DeepfakeReport.ts

export interface DeepfakeReport {
  mediaHash: string;
  mediaUrl: string;
  isAuthentic: boolean;
  score: number;
  confidence: number;
  modelVersion: string;
  checkedAt: string;
  explanation: string;
}
