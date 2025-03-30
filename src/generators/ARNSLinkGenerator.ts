export class ARNSLinkGenerator {
    static readonly DEFAULT_GATEWAY = 'ar.ionode.online';

    static generateARNSLink(name: string, gateway: string = ARNSLinkGenerator.DEFAULT_GATEWAY): string {
        return `https://${name}.${gateway}`;
    }

    static generateUndernameLink(name: string, undername: string, gateway: string = ARNSLinkGenerator.DEFAULT_GATEWAY): string {
        return `https://${undername}_${name}.${gateway}`;
    }
}
