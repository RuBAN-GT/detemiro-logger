# Detemiro Logger

`Detemiro Logger` is a set of logging libraries for different runtime environments.

[![npm detemiro-logger](https://img.shields.io/npm/v/detemiro-logger?label=detemiro-logger)](https://www.npmjs.com/package/detemiro-logger)
[![npm detemiro-logger-node](https://img.shields.io/npm/v/detemiro-logger-node?label=detemiro-logger-node)](https://www.npmjs.com/package/detemiro-logger-node)
[![npm detemiro-logger-browser](https://img.shields.io/npm/v/detemiro-logger-browser?label=detemiro-logger-browser)](https://www.npmjs.com/package/detemiro-logger-browser)
[![npm detemiro-logger-nestjs](https://img.shields.io/npm/v/detemiro-logger-nestjs?label=detemiro-logger-nestjs)](https://www.npmjs.com/package/detemiro-logger-nestjs)

## Project Structure

The project contains several libraries:

1. [libs/core](./libs/core) - shared interfaces and factory helpers.
2. [libs/browser](./libs/browser) - browser logger adapter.
3. [libs/node](./libs/node) - Node.js logger adapter.
4. [libs/nestjs](./libs/nestjs) - Nest.js wrapper for the Node adapter.

## Usage

Use one of the provided adapters from [libs/node](./libs/node) or [libs/browser](./libs/browser), depending on your environment.

For **Node.js**, install:

```bash
yarn add detemiro-logger detemiro-logger-node
```

Then create a logger factory with adapter and config:

- `application` - application name prefix.
- `env` - environment name for filtering.
- `label` - service/domain label.
- `getContextId` - function returning a stable context/client id, for example: `getContextId: () => 'client-id-007'`.

```typescript
import { createLoggerFactory } from 'detemiro-logger'
import { nodeAdapter } from 'detemiro-logger-node'

const loggerFactory = createLoggerFactory(nodeAdapter, {
  application: 'my-app',
  env: 'development',
})
const logger = loggerFactory('my-service')

logger.debug('Hello %s', 'world')
logger.error('My error: %o', { details: 'Test' })
logger.fatal('Fatal message.')
logger.warn('Warn message.')
logger.info('Info message.')
logger.info('Info Object %o', { hello: 'world' })
logger.info('%o', { hello: 'world' })
```

## Contributing

To contribute:

```bash
yarn install
```
