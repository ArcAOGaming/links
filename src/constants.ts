// ARNS Gateway
const getGateWay = () => {
    return ARNS_GATEWAYS[Math.floor(Math.random() * ARNS_GATEWAYS.length)];
}

export const DEFAULT_ARNS_GATEWAY = getGateWay();

//ARNS Names
export const ARNS_RANDAO = 'randao'
export const ARNS_RANDAO_DOCS = `docs_${ARNS_RANDAO}`
export const ARNS_BOTEGA = 'botega.defi.ao'

// Project Domains
export const DOMAIN_RANDAO = 'randao.net';
export const DOMAIN_SATOSHISPALACE = 'satoshispalace.casino';
export const DOMAIN_AUTONOMOUS_FINANCE = 'www.autonomous.finance';

// Social Platform Domains
export const DOMAIN_X = 'x.com';
export const DOMAIN_TWITTER_INTENT = 'twitter.com/intent/follow?screen_name';
export const DOMAIN_GITHUB = 'github.com';
export const DOMAIN_GITHUB_ORGS = 'github.com/orgs';
export const DOMAIN_DISCORD_INVITE = 'discord.com/invite';
export const DOMAIN_TELEGRAM = 't.me';
export const DOMAIN_YOUTUBE = 'youtube.com/channel';
export const DOMAIN_YOUTUBE_HANDLE = 'youtube.com/@';

// Shared Social Links
export const ARCAO_DISCORD = 'arc-ao';
export const ARCAO_TELEGRAM = 'ArcAOGames';


const ARNS_GATEWAYS = [
    "enzifiri.com",
    "ario-gateway.nethermind.dev",
    "ar01.fyeo.io",
    "arweave.zelf.world",
    "cyanalp.cfd",
    "openar.dev",
    "siyantest.xyz",
    "zaurmammadov.xyz",
    "permadao.io",
    "rtmpsunucu.online",
    "flechemano.com",
    "arweave.ar",
    "bambik.online",
    "devkral.xyz",
    "adn79.pro",
    "permagate.io",
    "asilkan.online",
    "g8way.io",
    "zigza.xyz",
    "canduesed.me",
    "krayir.xyz",
    "0xyvz.xyz",
    "anaraydinli.xyz",
    "defi.ao"
]
