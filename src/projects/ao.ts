import { getGateWay } from '../gateways';
import type { AoLinks } from '../types';

export const AO_LINKS: AoLinks = {
    website: `https://ao.${getGateWay()}`,
    delegate:`https://ao.${getGateWay()}/#/delegate/`,
    mint: `https://ao.${getGateWay()}/#/mint/deposits/`
};
