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
    BotegaLinks
} from './types';

// Import project links
import { ARCAO_LINKS } from './projects/arcao';
import { RUNEREALM_LINKS } from './projects/runerealm';
import { RANDAO_LINKS } from './projects/randao';
import { SATOSHISPALACE_LINKS } from './projects/satoshispalace';
import { AO_LINKS } from './projects/ao';
import { AUTONOMOUS_FINANCE_LINKS } from './projects/autonomousFinance';
import { BOTEGA_LINKS } from './projects/botega';

// Export project links with their specific types
export const ARCAO: ArcaoLinks = ARCAO_LINKS;
export const RUNEREALM: RunerealmLinks = RUNEREALM_LINKS;
export const RANDAO: RandaoLinks = RANDAO_LINKS;
export const SATOSHISPALACE: SatoshisPalaceLinks = SATOSHISPALACE_LINKS;
export const AO: AoLinks = AO_LINKS;
export const AUTONOMOUS_FINANCE: AutonomousFinanceLinks = AUTONOMOUS_FINANCE_LINKS;
export const BOTEGA: BotegaLinks = BOTEGA_LINKS;

// Export all projects in a single object
export const PROJECTS = {
    ARCAO,
    RUNEREALM,
    RANDAO,
    SATOSHISPALACE,
    AO,
    AUTONOMOUS_FINANCE,
    BOTEGA
} as const;

// Export types and constants
export type { 
    ArcaoLinks, 
    RunerealmLinks, 
    RandaoLinks, 
    SatoshisPalaceLinks,
    AoLinks,
    AutonomousFinanceLinks,
    BotegaLinks
} from './types';
export * from './constants';
