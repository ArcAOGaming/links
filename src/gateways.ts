// Static fallback gateways
const ARNS_GATEWAYS = [
    "arweave.net",
    "arweave.ar",
];

/**
 * Get random gateway from static list
 */
export const getGateWay = (): string => {
    return ARNS_GATEWAYS[Math.floor(Math.random() * ARNS_GATEWAYS.length)];
};
