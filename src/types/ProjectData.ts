/**
 * Interface representing the base data needed to generate project links
 */
export interface ProjectData {
    /** Main domain without protocol (e.g., 'project.xyz') */
    domain?: string;

    /** GitHub organization or username */
    githubOrg?: string;

    /** Twitter handle without @ (e.g., 'projectxyz') */
    twitterHandle?: string;

    /** Discord invite code that comes after discord.gg/ */
    discordInvite?: string;

    /** Contract address for blockchain explorer */
    contractAddress?: string;

    /** ARNS name without .ar (e.g., 'project') */
    arnsName?: string;

    /** Demo site undername (e.g., 'demo' becomes demo_project.ar.ionode.online) */
    demoUndername?: string;

    /** App site undername (e.g., 'app' becomes app_project.ar.ionode.online) */
    appUndername?: string;

    /** Custom ARNS gateway (default: ar.ionode.online) */
    arnsGateway?: string;

    /** YouTube channel ID (after @) */
    youtubeChannel?: string;

    /** Linktree username */
    linktreeUsername?: string;

    /** Telegram username or group (without @) */
    telegramUsername?: string;
}
