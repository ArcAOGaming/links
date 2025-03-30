/**
 * Project Links Package
 * Static links for various blockchain projects
 */

// Import project-specific types
import type { ArcaoLinks, RunerealmLinks, RandaoLinks, SatoshisPalaceLinks } from './types';

// Import project links
import { ARCAO_LINKS } from './projects/arcao';
import { RUNEREALM_LINKS } from './projects/runerealm';
import { RANDAO_LINKS } from './projects/randao';
import { SATOSHISPALACE_LINKS } from './projects/satoshispalace';

// Export project links with their specific types
export const ARCAO: ArcaoLinks = ARCAO_LINKS;
export const RUNEREALM: RunerealmLinks = RUNEREALM_LINKS;
export const RANDAO: RandaoLinks = RANDAO_LINKS;
export const SATOSHISPALACE: SatoshisPalaceLinks = SATOSHISPALACE_LINKS;

// Export all projects in a single object
export const PROJECTS = {
    ARCAO,
    RUNEREALM,
    RANDAO,
    SATOSHISPALACE
} as const;

// Export types and constants
export type { ArcaoLinks, RunerealmLinks, RandaoLinks, SatoshisPalaceLinks } from './types';
export * from './constants';
