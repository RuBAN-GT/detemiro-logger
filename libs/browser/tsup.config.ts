import type { Options } from 'tsup'

export const tsup: Options = {
  clean: true,
  dts: true,
  format: ['esm', 'cjs', 'iife'],
  globalName: 'detemiroLogger',
  minify: true,
  entry: ['src/index.ts'],
  target: 'es2020',
  outDir: 'dist'
}
