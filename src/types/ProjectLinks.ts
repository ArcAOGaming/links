/**
 * Interface representing all possible links for a project
 */
export interface ProjectLinks {
    /** Main website URL */
    website?: string;

    /** GitHub repository URL */
    github?: string;

    /** Documentation site URL */
    docs?: string;

    /** Twitter profile URL */
    twitter?: string;

    /** Twitter follow button URL */
    twitterFollow?: string;

    /** Discord server invite URL */
    discord?: string;

    /** Blockchain explorer URL for contracts */
    explorer?: string;

    /** ARNS domain URL (name.ar.ionode.online) */
    arns?: string;

    /** Demo site URL (demo_name.ar.ionode.online) */
    demoSite?: string;

    /** App site URL (app_name.ar.ionode.online) */
    appSite?: string;

    /** YouTube channel URL */
    youtube?: string;

    /** Linktree profile URL */
    linktree?: string;

    /** Telegram chat/group URL */
    telegram?: string;
}
