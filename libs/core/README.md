# Detemiro Logger Core

This package contains base interfaces and factory helpers for Detemiro logging.

## Installation

```bash
yarn add detemiro-logger
```

## Usage

To use the logger in a real environment, combine this package with an adapter from:
- [libs/node](./../node)
- [libs/browser](./../browser)

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
