import type { AoLinks } from '../types';
import { DEFAULT_ARNS_GATEWAY } from '../constants';

export const AO_LINKS: AoLinks = {
    website: `https://ao.${DEFAULT_ARNS_GATEWAY}`,
    delegate:`https://ao.${DEFAULT_ARNS_GATEWAY}/#/delegate/`,
    mint: `https://ao.${DEFAULT_ARNS_GATEWAY}/#/mint/deposits/`
};
