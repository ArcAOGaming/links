import type { GameLinks } from '../types';
import { ARCAO_LINKS } from './arcao';
import { getGateWay } from '../gateways';

export const GAME_LINKS: GameLinks = {
    ...ARCAO_LINKS,
    website: `https://game.${getGateWay()}`,
};
