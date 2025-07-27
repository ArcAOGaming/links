# Project Links

A TypeScript package providing easy access to links and information for various blockchain projects, with support for follow links and utility functions.

## Installation

```bash
npm install @arcaogaming/project-links
```

## Usage

### Accessing Project Links

```typescript
import { ARCAO, RANDAO } from 'project-links';

// Access all projects
console.log(ARCAO.website);     // https://arcao.xyz
console.log(RANDAO.twitter);    // https://twitter.com/randaoxyz
console.log(RANDAO.twitterFollow); // https://twitter.com/intent/follow?screen_name=randaoxyz

// Or import specific project
console.log(ARCAO.discord);  // https://discord.gg/arcao
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
