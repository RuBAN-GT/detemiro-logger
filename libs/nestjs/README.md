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

## Root logger

Nest.js provides API to inject logger into general application context by modifying `bootstrap` function:

```typescript
import { NestLoggerService } from 'detemiro-logger-nestjs'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule)

  const generalLogger = app.get(NestLoggerService)
  app.useLogger(generalLogger)

  await app.listen(3000)
}
bootstrap()
```

You will see logs from Nest.js in your logger format like:

```bash
[General] [info] [2024-09-29T07:20:16.556Z] HealthController {/}:
[General] [info] [2024-09-29T07:20:16.559Z] Mapped {/healthz, GET} route
[General] [info] [2024-09-29T07:20:16.559Z] Mapped {/readyz, GET} route
[General] [info] [2024-09-29T07:20:16.560Z] Mapped {/metrics, GET} route
[General] [info] [2024-09-29T07:20:16.563Z] Nest application successfully started
```
