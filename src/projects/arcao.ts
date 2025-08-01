import type { ArcaoLinks } from '../types';
import {
    DOMAIN_X,
    DOMAIN_GITHUB,
    DOMAIN_DISCORD_INVITE,
    DOMAIN_TELEGRAM,
    DOMAIN_YOUTUBE,
    DOMAIN_TWITTER_INTENT,
    ARCAO_DISCORD,
    ARCAO_TELEGRAM
} from '../constants';
import { getGateWay } from '../gateways';

export const ARCAO_LINKS: ArcaoLinks = {
    website: `https://arcao_game.${getGateWay()}`,
    twitter: `https://${DOMAIN_X}/Arc_AO`,
    twitterFollow: `https://${DOMAIN_TWITTER_INTENT}=Arc_AO`,
    github: `https://${DOMAIN_GITHUB}/ArcAOGaming`,
    discord: `https://${DOMAIN_DISCORD_INVITE}/${ARCAO_DISCORD}`,
    telegram: `https://${DOMAIN_TELEGRAM}/${ARCAO_TELEGRAM}`,
    youtube: `https://${DOMAIN_YOUTUBE}/UCZ2BLp3TXFAVs6q5S_34H0A`,
    docs: `https://docs-arcao_game.${getGateWay()}`,
    mediaKit: `https://docs-arcao_game.${getGateWay()}/media-kit`,
    sdkDocs: `https://randaolabs.github.io/ao-js-sdk/`,
    ambassadorProgramSignup: `https://game.${getGateWay()}/earn`,
    ambassadorWins: 'https://discord.com/channels/1209645894039896074/1325889123382198322',
    acceleratorProgramSignup: `https://docs-arcao_game.${getGateWay()}/news/accelertator`,
    investorSignup: `https://docs-arcao_game.${getGateWay()}/docs/investors/overview`,
    fairLaunchProjectsExplanation: `https://docs-arcao_game.${getGateWay()}/news/fair-launch-projects`,
    permawebIndexExplanation: `https://docs-arcao_game.${getGateWay()}/news/permaweb-index`,
    useOfFundsExplanation: `https://docs-arcao_game.${getGateWay()}/news/funding`,
    delegate: `https://game.${getGateWay()}/mint`,
    delegationGuide: `https://docs-arcao_game.${getGateWay()}/docs/investors/how-to-yield-game-token`,
};
