export class ProjectLinkGenerator {
    static generateWebsiteLink(domain: string): string {
        return `https://${domain}`;
    }

    static generateDocsLink(domain: string): string {
        return `https://docs.${domain}`;
    }

    static generateDappLink(domain: string): string {
        return `https://app.${domain}`;
    }

    static generateWhitepaperLink(domain: string): string {
        return `https://${domain}/whitepaper.pdf`;
    }

    static generateExplorerLink(contractAddress: string, network: string = 'ethereum'): string {
        switch (network) {
            case 'ethereum':
                return `https://etherscan.io/address/${contractAddress}`;
            case 'bitcoin':
                return `https://mempool.space/address/${contractAddress}`;
            default:
                throw new Error(`Unsupported network: ${network}`);
        }
    }
}
