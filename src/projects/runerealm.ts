import type { RunerealmLinks } from '../types';
import {
    DOMAIN_GITHUB_ORGS,
    DOMAIN_X,
    DOMAIN_DISCORD_INVITE,
    DOMAIN_TELEGRAM,
    DOMAIN_TWITTER_INTENT,
    ARCAO_DISCORD,
    ARCAO_TELEGRAM
} from '../constants';
import { getGateWay } from '../gateways';

export const RUNEREALM_LINKS: RunerealmLinks = {
    twitter: `https://${DOMAIN_X}/runerealm_ao`,
    twitterFollow: `https://${DOMAIN_TWITTER_INTENT}=runerealm_ao`,
    github: `https://${DOMAIN_GITHUB_ORGS}/RuneRealm/repositories`,
    discord: `https://${DOMAIN_DISCORD_INVITE}/${ARCAO_DISCORD}`,
    telegram: `https://${DOMAIN_TELEGRAM}/${ARCAO_TELEGRAM}`,
    gameSite: `https://runerealm_game.${getGateWay()}/#/`,
    premiumGameSite: `https://premium_game.${getGateWay()}/`
};
