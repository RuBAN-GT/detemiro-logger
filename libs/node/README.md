# Detemiro Node.js Logger

This package provides a Node.js adapter for `detemiro-logger`.

## Installation

```bash
yarn add detemiro-logger detemiro-logger-node
```

## Usage

The package exports three main modules:

- `nodeAdapter` - adapter-based logger factory builder.
- `loggerFactory` - prebuilt logger factory using the Node adapter.
- `logger` - ready-to-use logger instance when a factory is not required.

Recommended config options:

- `application` - application name prefix.
- `env` - environment name.
- `label` - service/domain label.
- `getContextId` - function returning a stable context id, for example `getContextId: () => 'client-id-007'`.

For verbose output in development, set: `LOG_VERBOSE=true`.

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
