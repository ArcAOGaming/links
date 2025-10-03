import type { ForwardResearchLinks } from '../types';
import { getGateWay } from '../gateways';

export const FORWARDRESEARCH_LINKS: ForwardResearchLinks = {
    website: `https://fwd.${getGateWay()}`
};