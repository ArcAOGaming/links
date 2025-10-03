import { ARIO } from "@ar.io/sdk";
import {
    NetworkGatewaysProvider,
    SimpleCacheGatewaysProvider
} from "@ar.io/wayfinder-core";

/**
 * GatewayManager provides optimized gateway selection using AR.IO Network
 * with page-load session consistency and fallback to static gateways
 */
class GatewayManager {
    private static instance: GatewayManager;
    private sessionGateway: string | null = null;
    private cachedGateways: string[] = [];
    private gatewaysProvider: SimpleCacheGatewaysProvider | null = null;
    private isInitializing = false;

    private constructor() {
        this.initializeGatewaysProvider();
    }

    public static getInstance(): GatewayManager {
        if (!GatewayManager.instance) {
            GatewayManager.instance = new GatewayManager();
        }
        return GatewayManager.instance;
    }

    /**
     * Initialize gateways provider with AR.IO Network providers
     */
    private async initializeGatewaysProvider(): Promise<void> {
        if (this.isInitializing || this.gatewaysProvider) {
            return;
        }

        try {
            this.isInitializing = true;

            // Create network provider for top 5 gateways by operator stake
            const networkProvider = new NetworkGatewaysProvider({
                ario: ARIO.mainnet(),
                sortBy: 'operatorStake',
                sortOrder: 'desc',
                limit: 5,
                filter: (gateway) => {
                    // Only use active gateways with no recent failures
                    return gateway.status === 'joined' && gateway.stats.failedConsecutiveEpochs === 0;
                }
            });

            // Wrap with caching (10 minute TTL)
            this.gatewaysProvider = new SimpleCacheGatewaysProvider({
                ttlSeconds: 600, // 10 minutes
                gatewaysProvider: networkProvider
            });

            // Try to fetch initial gateway list
            await this.updateCachedGateways();

        } catch (error) {
            console.warn('Failed to initialize gateways provider:', error);
            // Will fall back to static gateways
        } finally {
            this.isInitializing = false;
        }
    }

    /**
     * Update cached gateways from the provider
     */
    private async updateCachedGateways(): Promise<void> {
        try {
            if (this.gatewaysProvider) {
                const gatewayUrls = await this.gatewaysProvider.getGateways();
                this.cachedGateways = gatewayUrls.map(url => url.hostname);
            }
        } catch (error) {
            console.warn('Failed to update cached gateways:', error);
            // Keep existing cached gateways or fall back to static
        }
    }

    /**
     * Get gateway with page-load session consistency
     */
    public getGateway(): string {
        // Return cached session gateway if already selected
        if (this.sessionGateway) {
            return this.sessionGateway;
        }

        // Select new gateway for this page load session
        this.sessionGateway = this.selectGateway();

        // Opportunistically update cached gateways for next session (non-blocking)
        this.updateCachedGateways().catch(() => {
            // Ignore errors, will use current cache or static fallback
        });

        return this.sessionGateway;
    }

    /**
     * Select gateway from cached dynamic list or fallback to static
     */
    private selectGateway(): string {
        // Use cached dynamic gateways if available
        if (this.cachedGateways.length > 0) {
            const randomIndex = Math.floor(Math.random() * this.cachedGateways.length);
            return this.cachedGateways[randomIndex];
        }

        // Fall back to static gateway selection
        return this.selectFromStaticGateways();
    }

    /**
     * Select random gateway from static list
     */
    private selectFromStaticGateways(): string {
        return ARNS_GATEWAYS[Math.floor(Math.random() * ARNS_GATEWAYS.length)];
    }

    /**
     * Reset session (for new page loads)
     */
    public resetSession(): void {
        this.sessionGateway = null;
    }

    /**
     * Eagerly initialize and fetch gateway list
     */
    public async initialize(): Promise<void> {
        await this.initializeGatewaysProvider();
        await this.updateCachedGateways();
    }
}

// Singleton instance
const gatewayManager = GatewayManager.getInstance();

/**
 * Get optimized gateway with page-load session consistency
 * Maintains backward compatibility with existing synchronous interface
 */
export const getGateWay = (): string => {
    return gatewayManager.getGateway();
};

/**
 * Initialize dynamic gateway selection for optimal performance
 * Optional: Call at application startup for eager loading
 */
export const initializeGateways = async (): Promise<void> => {
    await gatewayManager.initialize();
};

/**
 * Reset gateway session (useful for testing or manual refresh)
 */
export const resetGatewaySession = (): void => {
    gatewayManager.resetSession();
};

// Static fallback gateways
const ARNS_GATEWAYS = [
    "arweave.net",
    "arweave.ar",
];
