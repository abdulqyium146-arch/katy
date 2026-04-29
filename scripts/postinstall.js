#!/usr/bin/env node
/**
 * Workaround for Next.js 15.5.x bug where generateBuildId is stripped from
 * the config by the Zod validation/clone pipeline, causing TypeError at build time.
 * https://github.com/vercel/next.js/issues/...
 */
const fs = require('fs')
const path = require('path')

const target = path.join(
  __dirname,
  '..',
  'node_modules',
  'next',
  'dist',
  'build',
  'generate-build-id.js'
)

if (!fs.existsSync(target)) {
  console.log('[postinstall] generate-build-id.js not found, skipping patch')
  process.exit(0)
}

const original = fs.readFileSync(target, 'utf8')
const guard = '    if (typeof generate !== \'function\') generate = async () => null;\n'
const needle = '    let buildId = await generate();'

if (original.includes(guard)) {
  console.log('[postinstall] generate-build-id.js already patched')
  process.exit(0)
}

if (!original.includes(needle)) {
  console.log('[postinstall] generate-build-id.js: expected needle not found, skipping')
  process.exit(0)
}

const patched = original.replace(needle, guard + needle)
fs.writeFileSync(target, patched)
console.log('[postinstall] Patched next/dist/build/generate-build-id.js')
