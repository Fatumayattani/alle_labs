// packages/alle-mcp-plugin/src/utils/x402.ts

export async function verifyPremiumPayment(resource: string) {
  console.log("Checking x402 payment for:", resource);

  // Placeholder logic
  const paid = true;

  if (!paid) {
    throw new Error("Premium scan requires x402 payment");
  }

  return true;
}
