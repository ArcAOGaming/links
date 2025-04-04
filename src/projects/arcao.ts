import type { ArcaoLinks } from '../types';
import {
    DEFAULT_ARNS_GATEWAY,
    DOMAIN_X,
    DOMAIN_GITHUB,
    DOMAIN_DISCORD_INVITE,
    DOMAIN_TELEGRAM,
    DOMAIN_YOUTUBE,
    DOMAIN_TWITTER_INTENT,
    ARCAO_DISCORD,
    ARCAO_TELEGRAM
} from '../constants';

export const ARCAO_LINKS: ArcaoLinks = {
    twitter: `https://${DOMAIN_X}/Arc_AO`,
    twitterFollow: `https://${DOMAIN_TWITTER_INTENT}=Arc_AO`,
    github: `https://${DOMAIN_GITHUB}/ArcAOGaming`,
    discord: `https://${DOMAIN_DISCORD_INVITE}/${ARCAO_DISCORD}`,
    telegram: `https://${DOMAIN_TELEGRAM}/${ARCAO_TELEGRAM}`,
    youtube: `https://${DOMAIN_YOUTUBE}/UCZ2BLp3TXFAVs6q5S_34H0A`,
    docs: `https://docs-arcao_game.${DEFAULT_ARNS_GATEWAY}`
};
