import { build } from 'esbuild';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { dirname } from 'path';

async function createCJSBundle() {
    // Build CJS version
    await build({
        entryPoints: ['./dist/src/index.js'],
        outfile: './dist/src/index.cjs',
        format: 'cjs',
        platform: 'neutral',
        target: 'node14',
        bundle: true,
    });

    // Read the CJS file
    const cjsContent = await readFile('./dist/src/index.cjs', 'utf8');

    // Add exports.__esModule = true for better CJS/ESM interop
    const updatedContent = `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
${cjsContent}`;

    // Write back the updated content
    await writeFile('./dist/src/index.cjs', updatedContent);
}

// Ensure the scripts directory exists
await mkdir(dirname(new URL(import.meta.url).pathname), { recursive: true });

try {
    await createCJSBundle();
    console.log('✓ Build completed successfully');
} catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
}
