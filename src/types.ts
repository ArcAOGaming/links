// All possible link types
export interface AllLinkTypes {
    website: string;      // Main website URL
    sdkDocs: string;
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
interface ArcAOSpecificLinks { acceleratorProgramSignup: string, ambassadorProgramSignup: string, investorSignup: string, fairLaunchProjectsExplanation: string, permawebIndexExplanation: string, useOfFundsExplanation: string, delegate: string }
export type ArcaoLinks = Pick<AllLinkTypes, 'sdkDocs' | 'website' | 'twitter' | 'twitterFollow' | 'github' | 'discord' | 'telegram' | 'youtube' | 'docs'> & ArcAOSpecificLinks;;

export type RunerealmLinks = Pick<AllLinkTypes, 'twitter' | 'twitterFollow' | 'github' | 'discord' | 'telegram' | 'gameSite' | 'premiumGameSite'>;

interface RandAOSpecificLinks { providerSite: string, videoHowRandaoWorks: string, theOnchainRandomnessProblem: string }
export type RandaoLinks = Pick<AllLinkTypes, 'sdkDocs' | 'website' | 'twitter' | 'twitterFollow' | 'github' | 'discord' | 'telegram' | 'youtube'> & RandAOSpecificLinks;

export type SatoshisPalaceLinks = Pick<AllLinkTypes, 'website' | 'twitter' | 'twitterFollow' | 'discord' | 'telegram'>;

// New project-specific link types
interface AOSpecificLinks { delegate: string, mint: string}
export type AoLinks = Pick<AllLinkTypes, 'website'> & AOSpecificLinks;

export type AutonomousFinanceLinks = Pick<AllLinkTypes, 'website'>;

export type BotegaLinks = Pick<AllLinkTypes, 'website'>;
