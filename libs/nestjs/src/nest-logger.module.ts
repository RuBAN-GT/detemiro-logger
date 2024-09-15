import { defineLogger } from 'detemiro-logger'

import { DynamicModule } from '@nestjs/common'

import { NEST_LOGGER_FACTORY, NestLoggerModuleOptions } from './defs'
import { NestLoggerService } from './nest-logger.service'

export class NestLoggerModule {
  public static forRoot(options: NestLoggerModuleOptions = {}): DynamicModule {
    const { adapter } = options

    return {
      module: NestLoggerModule,
      global: true,
      providers: [
        {
          provide: NEST_LOGGER_FACTORY,
          useFactory: () => (label?: string) => new NestLoggerService(defineLogger({ adapter })(label)),
        },
        {
          provide: NestLoggerService,
          useFactory: () => new NestLoggerService(defineLogger({ adapter })()),
        },
      ],
      exports: [NEST_LOGGER_FACTORY, NestLoggerService],
    }
  }
}
