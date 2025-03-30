import { ProjectLinkGenerator } from '../generators/ProjectLinkGenerator';
import { SocialLinkGenerator } from '../generators/SocialLinkGenerator';
import { ARNSLinkGenerator } from '../generators/ARNSLinkGenerator';
import type { ProjectData } from './ProjectData';
import type { ProjectLinks } from './ProjectLinks';

export class Project {
    private readonly data: ProjectData;
    private readonly links: ProjectLinks;

    constructor(data: ProjectData) {
        this.data = data;
        this.links = this.generateLinks();
    }

    private generateLinks(): ProjectLinks {
        const links: Partial<ProjectLinks> = {};

        if (this.data.domain) {
            links.website = ProjectLinkGenerator.generateWebsiteLink(this.data.domain);
            links.docs = ProjectLinkGenerator.generateDocsLink(this.data.domain);
        }

        if (this.data.githubOrg) {
            links.github = SocialLinkGenerator.generateGithubLink(this.data.githubOrg);
        }

        if (this.data.twitterHandle) {
            links.twitter = SocialLinkGenerator.generateTwitterLink(this.data.twitterHandle);
            links.twitterFollow = SocialLinkGenerator.generateTwitterFollowLink(this.data.twitterHandle);
        }

        if (this.data.discordInvite) {
            links.discord = SocialLinkGenerator.generateDiscordLink(this.data.discordInvite);
        }

        if (this.data.youtubeChannel) {
            links.youtube = SocialLinkGenerator.generateYoutubeLink(this.data.youtubeChannel);
        }

        if (this.data.linktreeUsername) {
            links.linktree = SocialLinkGenerator.generateLinktreeLink(this.data.linktreeUsername);
        }

        if (this.data.telegramUsername) {
            links.telegram = SocialLinkGenerator.generateTelegramLink(this.data.telegramUsername);
        }

        if (this.data.contractAddress) {
            links.explorer = ProjectLinkGenerator.generateExplorerLink(this.data.contractAddress);
        }

        if (this.data.arnsName) {
            links.arns = ARNSLinkGenerator.generateARNSLink(this.data.arnsName, this.data.arnsGateway);

            if (this.data.demoUndername) {
                links.demoSite = ARNSLinkGenerator.generateUndernameLink(
                    this.data.arnsName,
                    this.data.demoUndername,
                    this.data.arnsGateway
                );
            }

            if (this.data.appUndername) {
                links.appSite = ARNSLinkGenerator.generateUndernameLink(
                    this.data.arnsName,
                    this.data.appUndername,
                    this.data.arnsGateway
                );
            }
        }

        return links as ProjectLinks;
    }

    getLinks(): ProjectLinks {
        return this.links;
    }
}
