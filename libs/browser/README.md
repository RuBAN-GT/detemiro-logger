# Detemiro Browser Logger

This package provides a browser adapter for `detemiro-logger`.

## Installation

```bash
yarn add detemiro-logger detemiro-logger-browser
```

## Usage

The package exports three main modules:

- `browserAdapter` - adapter-based logger factory builder.
- `loggerFactory` - prebuilt logger factory using the browser adapter.
- `logger` - ready-to-use logger instance when a factory is not required.

Recommended config options:

- `application` - application name prefix.
- `env` - environment name.
- `label` - service/domain label.
- `getContextId` - function returning a stable context id, for example `getContextId: () => 'client-id-007'`.

For verbose output in development, set: `LOG_VERBOSE=true`.

```typescript
import { createLoggerFactory } from 'detemiro-logger'
import { browserAdapter } from 'detemiro-logger-browser'

const loggerFactory = createLoggerFactory(browserAdapter, {
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
