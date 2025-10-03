/**
 * Project Links Package
 * Static links for various blockchain projects
 */

// Import project-specific types
import type {
    ArcaoLinks,
    RunerealmLinks,
    RandaoLinks,
    SatoshisPalaceLinks,
    AoLinks,
    AutonomousFinanceLinks,
    BotegaLinks,
    BazarLinks,
    WanderLinks,
    WeareweLinks,
    MekahumanLinks,
    GameLinks,
    PermaswapLinks,
    ForwardResearchLinks,
    VentoLinks,
    BeaconLinks,
    AstrousdLinks
} from './types';

// Import project links
import { ARCAO_LINKS } from './projects/arcao';
import { RUNEREALM_LINKS } from './projects/runerealm';
import { RANDAO_LINKS } from './projects/randao';
import { SATOSHISPALACE_LINKS } from './projects/satoshispalace';
import { AO_LINKS } from './projects/ao';
import { AUTONOMOUS_FINANCE_LINKS } from './projects/autonomousFinance';
import { BOTEGA_LINKS } from './projects/botega';
import { BAZAR_Links } from './projects/bazar';
import { WANDER_LINKS } from './projects/wander';
import { WEAREWE_LINKS } from './projects/wearewe';
import { MEKAHUMAN_LINKS } from './projects/mekahuman';
import { GAME_LINKS } from './projects/game';
import { PERMASWAP_LINKS } from './projects/permaswap';
import { FORWARDRESEARCH_LINKS } from './projects/forwardresearch';
import { VENTO_LINKS } from './projects/vento';
import { BEACON_LINKS } from './projects/beacon';
import { ASTROUSD_LINKS } from './projects/astrousd';

// Export project links with their specific types
export const ARCAO: ArcaoLinks = ARCAO_LINKS;
export const RUNEREALM: RunerealmLinks = RUNEREALM_LINKS;
export const RANDAO: RandaoLinks = RANDAO_LINKS;
export const SATOSHISPALACE: SatoshisPalaceLinks = SATOSHISPALACE_LINKS;
export const AO: AoLinks = AO_LINKS;
export const AUTONOMOUS_FINANCE: AutonomousFinanceLinks = AUTONOMOUS_FINANCE_LINKS;
export const BOTEGA: BotegaLinks = BOTEGA_LINKS;
export const PERMASWAP: PermaswapLinks = PERMASWAP_LINKS;
export const BAZAR: BazarLinks = BAZAR_Links;
export const WANDER: WanderLinks = WANDER_LINKS;
export const WEAREWE: WeareweLinks = WEAREWE_LINKS;
export const MEKAHUMAN: MekahumanLinks = MEKAHUMAN_LINKS;
export const GAME: GameLinks = GAME_LINKS;
export const FORWARDRESEARCH: ForwardResearchLinks = FORWARDRESEARCH_LINKS;
export const VENTO: VentoLinks = VENTO_LINKS;
export const BEACON: BeaconLinks = BEACON_LINKS;
export const ASTROUSD: AstrousdLinks = ASTROUSD_LINKS;

// Export all projects in a single object
export const PROJECTS = {
    ARCAO,
    RUNEREALM,
    RANDAO,
    SATOSHISPALACE,
    AO,
    AUTONOMOUS_FINANCE,
    BOTEGA,
    BAZAR,
    WANDER,
    WEAREWE,
    MEKAHUMAN,
    GAME,
    PERMASWAP,
    FORWARDRESEARCH,
    VENTO,
    BEACON,
    ASTROUSD
} as const;

// Export types and constants
export type {
    ArcaoLinks,
    RunerealmLinks,
    RandaoLinks,
    SatoshisPalaceLinks,
    AoLinks,
    AutonomousFinanceLinks,
    BotegaLinks,
    BazarLinks,
    WanderLinks,
    WeareweLinks,
    MekahumanLinks,
    GameLinks,
    PermaswapLinks,
    ForwardResearchLinks,
    VentoLinks,
    BeaconLinks,
    AstrousdLinks
} from './types';
export * from './constants';
