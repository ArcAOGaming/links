import type { RandaoLinks } from '../types';
import {
    DOMAIN_RANDAO,
    DOMAIN_GITHUB,
    DOMAIN_X,
    DOMAIN_DISCORD_INVITE,
    DOMAIN_TELEGRAM,
    DOMAIN_YOUTUBE_HANDLE,
    DOMAIN_TWITTER_INTENT,
    ARCAO_DISCORD,
    ARCAO_TELEGRAM,
    ARNS_RANDAO,
    ARNS_RANDAO_DOCS
} from '../constants';
import { getGateWay } from '../gateways';

export const RANDAO_LINKS: RandaoLinks = {
    website: `https://${DOMAIN_RANDAO}`,
    twitter: `https://${DOMAIN_X}/RandAOToken`,
    twitterFollow: `https://${DOMAIN_TWITTER_INTENT}=RandAOToken`,
    github: `https://${DOMAIN_GITHUB}/RandAOLabs`,
    discord: `https://${DOMAIN_DISCORD_INVITE}/${ARCAO_DISCORD}`,
    telegram: `https://${DOMAIN_TELEGRAM}/${ARCAO_TELEGRAM}`,
    youtube: `https://${DOMAIN_YOUTUBE_HANDLE}RandAOToken`,
    providerSite: `https://providers_${ARNS_RANDAO}.${getGateWay()}`,
    sdkDocs: "https://randaolabs.github.io/ao-js-sdk/",
    videoHowRandaoWorks: "https://www.youtube.com/watch?v=z9hJnxGRxj4",
    theOnchainRandomnessProblem: `https://${ARNS_RANDAO_DOCS}.${getGateWay()}/news/the-onchain-randomness-problem`
};
