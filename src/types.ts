// All possible link types
export interface AllLinkTypes {
    website: string;      // Main website URL
    github: string;       // GitHub repository URL
    docs: string;        // Documentation site URL
    twitter: string;     // Twitter/X profile URL
    twitterFollow: string; // Twitter/X follow intent URL
    discord: string;     // Discord invite URL
    telegram: string;    // Telegram chat/group URL
    youtube: string;     // YouTube channel URL
    explorer: string;    // Blockchain explorer URL
    arns: string;       // ARNS domain URL
    demoSite: string;   // Demo site URL
    appSite: string;    // App site URL
    gameSite: string;   // Game site URL
    premiumGameSite: string; // Premium game site URL
}

// Project-specific link types
export type ArcaoLinks = Pick<AllLinkTypes, 'twitter' | 'twitterFollow' | 'github' | 'discord' | 'telegram' | 'youtube' | 'docs'>;

export type RunerealmLinks = Pick<AllLinkTypes, 'twitter' | 'twitterFollow' | 'github' | 'discord' | 'telegram' | 'gameSite' | 'premiumGameSite'>;

export type RandaoLinks = Pick<AllLinkTypes, 'website' | 'twitter' | 'twitterFollow' | 'github' | 'discord' | 'telegram' | 'youtube'>;

export type SatoshisPalaceLinks = Pick<AllLinkTypes, 'website' | 'twitter' | 'twitterFollow' | 'discord' | 'telegram'>;
