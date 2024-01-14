# NestJS Typescript Template

This is a template for NestJS projects using TypeScript. It uses SWC for compilation and Vitest for testing.

It aims to be a simple, yet powerful template for NestJS projects where you can get started quickly with solid foundation for your project and an in detail explanation of the dependencies.

- Yarn
- Node.js 20.x described using `nvm` (`.nvmrc`)
- NestJS w/ SWC & Type Check
- TypeScript w/ strict mode and path mappings
- Fastify
- ESLint w/ Prettier
- Unit and E2E testing w/ Vitest and SWC
- Zod for validation
- Typed app config with `nestjs-zod-config`

## Packages

### Dependencies
- `@nestjs/core`, `@nestjs/common`, `rxjs`, `reflect-metadata` - NestJS core packages and dependencies
- `@nestjs/platform-fastify` - NestJS Fastify adapter
- `zod` - Zod for validation (e.g. app config)
- `@nestjs/config`, `nestjs-zod-config` - Typed app config with Zod (`@nestjs/config` is a peer dependency of `nestjs-zod-config`)

### Development Dependencies
- `@nestjs/cli`, `@nestjs/schematics` - NestJS CLI and schematics for generating NestJS components using the CLI (`nest g`)
- `@swc/cli`, `@swc/core` - SWC compiler - used to compile the TypeScript code to JavaScript by the NestJS CLI
- `@nestjs/testing`, `vitest`, `unplugin-swc`, `@vitest/coverage-v8`, `vite-tsconfig-paths`, `supertest`, `@types/supertest` - NestJS testing utilities, Vitest, SWC plugin for Vite, V8 coverage plugin for Vitest, Vite plugin for TypeScript path mappings, Supertest for E2E testing, and TypeScript type definitions for Supertest
- `@types/node` - TypeScript type definitions for Node.js
- `eslint`, `eslint-config-universe`, `eslint-plugin-promise`, `prettier` - ESLint and Prettier for code linting and formatting, Expo's ESLint config (easy to use and a solid ruleset), and ESLint plugin for Promises
- `typescript` - TypeScript compiler
- `tsconfig-paths` - Resolves TypeScript path mappings, simplifying project structure management
    > ℹ️ Removed for now as it seems to work without it, but it might be needed in the future.
