import type { SatoshisPalaceLinks } from '../types';
import {
    DOMAIN_SATOSHISPALACE,
    DOMAIN_X,
    DOMAIN_DISCORD_INVITE,
    DOMAIN_TELEGRAM,
    DOMAIN_TWITTER_INTENT,
    ARCAO_DISCORD,
    ARCAO_TELEGRAM
} from '../constants';

export const SATOSHISPALACE_LINKS: SatoshisPalaceLinks = {
    website: `https://${DOMAIN_SATOSHISPALACE}`,
    twitter: `https://${DOMAIN_X}/SatoshisPalaceX`,
    twitterFollow: `https://${DOMAIN_TWITTER_INTENT}=SatoshisPalaceX`,
    discord: `https://${DOMAIN_DISCORD_INVITE}/${ARCAO_DISCORD}`,
    telegram: `https://${DOMAIN_TELEGRAM}/${ARCAO_TELEGRAM}`
};
