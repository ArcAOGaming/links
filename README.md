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

