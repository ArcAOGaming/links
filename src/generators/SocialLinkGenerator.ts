export class SocialLinkGenerator {
    static generateTwitterLink(handle: string): string {
        return `https://twitter.com/${handle}`;
    }

    static generateTwitterFollowLink(handle: string): string {
        return `https://twitter.com/intent/follow?screen_name=${handle}`;
    }

    static generateGithubLink(username: string): string {
        return `https://github.com/${username}`;
    }

    static generateDiscordLink(serverId: string): string {
        return `https://discord.gg/${serverId}`;
    }

    static generateMirrorLink(address: string): string {
        return `https://mirror.xyz/${address}`;
    }

    static generateYoutubeLink(channelId: string): string {
        return `https://youtube.com/@${channelId}`;
    }

    static generateLinktreeLink(username: string): string {
        return `https://linktr.ee/${username}`;
    }

    static generateTelegramLink(username: string): string {
        return `https://t.me/${username}`;
    }
}
