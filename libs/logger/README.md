# Detemiro Logger Package

The logger helps you to log messages in your application using `winston` under the hood. 
It supports different logging levels and provides a flexible way to log messages.

## Installation

You can install it using yarn or any other package manager:

```bash
yarn add detemiro-logger
```

## Usage

### Preparation

The package exposes several functions to work with logger:

- `defineLogger` - function to create a logger factory with predefined parameters.
- `createLogger` - function to create a logger instance with custom parameters.

Both of them support the following parameters:

- `adapter` - adapter to use for logging, by default it uses `ConsoleLogger`. For production, it is recommended to use `JsonLogger`.

```typescript
import { defineLogger } from 'detemiro-logger'

const consoleLogger = defineLogger()('CustomLabel')
consoleLogger.warn('Hello %s', 'world') // => [CustomLabel] [warn] [2021-01-01T00:00:00.000Z] Hello world
```

For more deep logging you can define `LOG_VERBOSE` environment variable to `true`.

### Interpolation

The logger supports interpolation splat for %d %s-style messages.

```typescript
logger.warn('%s %s', 'Hello', 'world') // => [general] [warn] [2021-01-01T00:00:00.000Z] Hello world
```
