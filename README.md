# Project Links

A TypeScript package providing easy access to links and information for various blockchain projects, with support for follow links and utility functions.

## Installation

```bash
npm install project-links
```

## Usage

### Accessing Project Links

```typescript
import { PROJECTS, ARCAO_LINKS } from 'project-links';

// Access all projects
console.log(PROJECTS.ARCAO_LINKS.website);     // https://arcao.xyz
console.log(PROJECTS.RANDAO_LINKS.twitter);    // https://twitter.com/randaoxyz
console.log(PROJECTS.RANDAO_LINKS.twitterFollow); // https://twitter.com/intent/follow?screen_name=randaoxyz

// Or import specific project
console.log(ARCAO_LINKS.discord);  // https://discord.gg/arcao
```

### Using Link Generators

```typescript
import { SocialLinkGenerator, ProjectLinkGenerator } from 'project-links';

// Generate social links
const twitterLink = SocialLinkGenerator.generateTwitterLink('username');
const twitterFollow = SocialLinkGenerator.generateTwitterFollowLink('username');
const githubLink = SocialLinkGenerator.generateGithubLink('org');
const discordLink = SocialLinkGenerator.generateDiscordLink('server');
const mirrorLink = SocialLinkGenerator.generateMirrorLink('user.eth');

// Generate project links
const websiteLink = ProjectLinkGenerator.generateWebsiteLink('domain.xyz');
const docsLink = ProjectLinkGenerator.generateDocsLink('domain.xyz');
const dappLink = ProjectLinkGenerator.generateDappLink('domain.xyz');
const explorerLink = ProjectLinkGenerator.generateExplorerLink('0x...', 'ethereum');
```

## Available Projects

### Arcao (`ARCAO_LINKS`)
- Decentralized gaming platform
- Links: Website, GitHub, Docs, Twitter (+ Follow), Discord, Mirror

### RuneRealm (`RUNEREALM_LINKS`)
- On-chain gaming metaverse
- Links: Website, GitHub, Docs, Twitter (+ Follow), Discord, Mirror

### RanDAO (`RANDAO_LINKS`)
- Decentralized randomness protocol
- Links: Website, GitHub, Docs, Whitepaper, Twitter (+ Follow), Discord, Mirror, Explorer

### Satoshi's Palace (`SATOSHISPALACE_LINKS`)
- Bitcoin gaming platform
- Links: Website, GitHub, Docs, Twitter (+ Follow), Discord, Mirror, dApp

## API

### Interfaces

All fields in both interfaces are optional, allowing for flexible and partial data:

```typescript
interface ProjectLinks {
    website?: string;          // Main website URL
    github?: string;          // GitHub repository URL
    docs?: string;            // Documentation site URL
    twitter?: string;         // Twitter profile URL
    twitterFollow?: string;   // Twitter follow button URL
    discord?: string;         // Discord server invite URL
    explorer?: string;        // Contract explorer URL
    arns?: string;           // ARNS domain (name.ar.ionode.online)
    demoSite?: string;       // Demo site (demo_name.ar.ionode.online)
    appSite?: string;        // App site (app_name.ar.ionode.online)
    youtube?: string;        // YouTube channel URL
    linktree?: string;      // Linktree profile URL
    telegram?: string;      // Telegram chat/group URL
}

interface ProjectData {
    domain?: string;          // Main domain (e.g., 'project.xyz')
    githubOrg?: string;      // GitHub organization/username
    twitterHandle?: string;   // Twitter handle without @
    discordInvite?: string;  // Discord invite code after discord.gg/
    contractAddress?: string; // Contract address for explorer
    arnsName?: string;       // ARNS name without .ar
    demoUndername?: string;  // Demo site undername (e.g., 'demo', 'rng')
    appUndername?: string;   // App site undername (e.g., 'app', 'play')
    arnsGateway?: string;    // Custom gateway (default: ar.ionode.online)
    youtubeChannel?: string; // YouTube channel ID (after @)
    linktreeUsername?: string; // Linktree username
    telegramUsername?: string; // Telegram username or group (without @)
}

// Example of minimal project data
const minimalProject: ProjectData = {
    domain: 'myproject.xyz',
    discordInvite: 'myproject'
};

// Example of full project data
const fullProject: ProjectData = {
    domain: 'randao.xyz',
    githubOrg: 'randao',
    twitterHandle: 'randaoxyz',
    discordInvite: 'randao',
    contractAddress: '0x...',
    arnsName: 'randao',
    demoUndername: 'rng',
    appUndername: 'app'
};
```

### Link Generators

The package includes three utility classes for generating various types of links:

#### SocialLinkGenerator
```typescript
SocialLinkGenerator.generateTwitterLink(handle: string): string
SocialLinkGenerator.generateTwitterFollowLink(handle: string): string
SocialLinkGenerator.generateGithubLink(username: string): string
SocialLinkGenerator.generateDiscordLink(serverId: string): string
SocialLinkGenerator.generateMirrorLink(address: string): string
SocialLinkGenerator.generateYoutubeLink(channelId: string): string
SocialLinkGenerator.generateLinktreeLink(username: string): string
SocialLinkGenerator.generateTelegramLink(username: string): string
```

#### ProjectLinkGenerator
```typescript
ProjectLinkGenerator.generateWebsiteLink(domain: string): string
ProjectLinkGenerator.generateDocsLink(domain: string): string
ProjectLinkGenerator.generateDappLink(domain: string): string
ProjectLinkGenerator.generateWhitepaperLink(domain: string): string
ProjectLinkGenerator.generateExplorerLink(contractAddress: string, network?: string): string
```

#### ARNSLinkGenerator
```typescript
// Default gateway: ar.ionode.online
ARNSLinkGenerator.generateARNSLink(name: string, gateway?: string): string
// Example: https://randao.ar.ionode.online

ARNSLinkGenerator.generateUndernameLink(name: string, undername: string, gateway?: string): string
// Example: https://rng_randao.ar.ionode.online (RanDAO's RNG demo)
// Example: https://play_satoshispalace.ar.ionode.online (Satoshi's Palace game)
```

### ARNS Support

Each project can have an ARNS domain and associated undernames:

```typescript
// Project data example
{
    arnsName: 'randao',              // Base ARNS name
    demoUndername: 'rng',           // Demo site undername (rng_randao.ar.ionode.online)
    appUndername: 'app',            // App site undername (app_randao.ar.ionode.online)
    arnsGateway: 'ar.ionode.online' // Optional custom gateway
}

// Generated links
{
    arns: 'https://randao.ar.ionode.online',
    demoSite: 'https://rng_randao.ar.ionode.online',
    appSite: 'https://app_randao.ar.ionode.online'
}
```

### Exports

- `PROJECTS`: Object containing all project links
- `ARCAO_LINKS`, `RUNEREALM_LINKS`, `RANDAO_LINKS`, `SATOSHISPALACE_LINKS`: Individual project links
- Link Generators: `SocialLinkGenerator`, `ProjectLinkGenerator`, `ARNSLinkGenerator`
- Types: `ProjectLinks`, `ProjectData`

### Project Structure

```
src/
  ├── generators/
  │   ├── SocialLinkGenerator.ts
  │   ├── ProjectLinkGenerator.ts
  │   └── ARNSLinkGenerator.ts
  ├── projects/
  │   ├── arcao.ts
  │   ├── runerealm.ts
  │   ├── randao.ts
  │   └── satoshispalace.ts
  ├── types/
  │   └── ProjectData.ts
  └── index.ts
```

## License

MIT
