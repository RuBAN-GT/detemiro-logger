# Detemiro Nest.js Logger

This package is a Nest.js wrapper around `detemiro-logger-node`.

## Installation

Install the required dependencies:

```bash
yarn add detemiro-logger-nestjs detemiro-logger-node detemiro-logger
```

## Usage

Import `NestLoggerModule` in your app root module:

```typescript
import { NestLoggerModule } from 'detemiro-logger-nestjs'

@Module({
  imports: [NestLoggerModule.forRoot()],
})
export class AppModule {}
```

In `forRoot`, you can customize logger prefixes:

- `application` - application name prefix.
- `env` - environment name.

After setup, there are several ways to use the logger.

### Use `NestLoggerService` directly

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

### Use the factory token

The package exports the `nestLoggerFactory` token to inject a ready logger factory into your service.

```typescript
import { LoggerService } from '@nestjs/common'
import { NestLoggerFactory, nestLoggerFactory } from 'detemiro-logger-nestjs'

@Injectable()
export class TestService {
  protected readonly logger: LoggerService

  constructor(@Inject(nestLoggerFactory) loggerFactory: NestLoggerFactory) {
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

## Application-level logger

Nest.js lets you register a logger for the whole app in `bootstrap`:

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

You will see Nest.js logs in Detemiro logger format, for example:

```bash
[General] [info] [2024-09-29T07:20:16.556Z] HealthController {/}:
[General] [info] [2024-09-29T07:20:16.559Z] Mapped {/healthz, GET} route
[General] [info] [2024-09-29T07:20:16.559Z] Mapped {/readyz, GET} route
[General] [info] [2024-09-29T07:20:16.560Z] Mapped {/metrics, GET} route
[General] [info] [2024-09-29T07:20:16.563Z] Nest application successfully started
```
