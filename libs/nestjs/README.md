# Nest.js Logger Wrapper Package

[![npm version](https://badge.fury.io/js/detemiro-logger-nestjs.svg)](https://badge.fury.io/js/detemiro-logger-nestjs)

Detemiro Nest.js logger helps to integrate `detemiro-logger` into your Nest.js application.

## Installation

You can install it using yarn or any other package manager:

```bash
yarn add detemiro-logger-nestjs
```

Don't forget to setup peer dependencies:

```bash
yarn add detemiro-logger
```

## Usage

You have import `NestLoggerModule` into your root module:

```typescript
import { NestLoggerModule } from 'detemiro-logger'

@Module({
  imports: [NestLoggerModule.forRoot()],
})
export class AppModule {}
```
After that you have several options to use logger in your services.

### Using `NestLoggerService` directly

```typescript
import { NestLoggerService } from 'detemiro-logger-nestjs'

@Injectable()
export class TestService {
  constructor(protected readonly logger: NestLoggerService) {}

  public test() {
    this.logger.log('Start to test my service.')

    try {
      // Your Business Logic
    } catch (error) {
      this.logger.error('Error was raised: %o', error)
    }
  }
}
```

### Using `loggerFactory` function

The library exposes `NEST_LOGGER_FACTORY` token that can be used
to inject logger factory function into your service.

```typescript
import { LoggerService } from '@nestjs/common'
import { NEST_LOGGER_FACTORY, NestLoggerFactory } from 'detemiro-logger-nestjs'

@Injectable()
export class TestService {
  protected readonly logger: LoggerService

  constructor(
    @Inject(NEST_LOGGER_FACTORY) loggerFactory: NestLoggerFactory,
  ) {
    this.logger = loggerFactory('TestService')
  }

  public test() {
    this.logger.log('Start to test my service.')

    try {
      // Your Business Logic
    } catch (error) {
      this.logger.error('Error was raised: %o', error)
    }
  }
}
```
