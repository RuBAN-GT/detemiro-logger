import { createLoggerFactory } from 'detemiro-logger'
import { nodeAdapter } from 'detemiro-logger-node'

import { DynamicModule } from '@nestjs/common'

import { NestLoggerAsyncModuleArgs, nestLoggerFactory, NestLoggerModuleOptions, nestLoggerOptions } from './defs'
import { NestLoggerService } from './nest-logger.service'

export class NestLoggerModule {
  public static forRoot(options: NestLoggerModuleOptions = {}): DynamicModule {
    return {
      module: NestLoggerModule,
      global: true,
      providers: [
        { provide: nestLoggerOptions, useValue: options },
        {
          provide: nestLoggerFactory,
          useFactory: () => (label?: string) => new NestLoggerService(createLoggerFactory(nodeAdapter, options)(label)),
        },
        {
          provide: NestLoggerService,
          useFactory: () => new NestLoggerService(createLoggerFactory(nodeAdapter, { label: 'global', ...options })()),
        },
      ],
      exports: [nestLoggerFactory, NestLoggerService],
    }
  }

  public static forRootAsync(args: NestLoggerAsyncModuleArgs): DynamicModule {
    const { imports = [], inject = [], useFactory } = args

    return {
      module: NestLoggerModule,
      global: true,
      imports,
      providers: [
        { provide: nestLoggerOptions, useFactory, inject },
        {
          provide: nestLoggerFactory,
          inject: [nestLoggerOptions],
          useFactory: (options: NestLoggerModuleOptions) => (label?: string) =>
            new NestLoggerService(createLoggerFactory(nodeAdapter, options)(label)),
        },
        {
          provide: NestLoggerService,
          useFactory: (options: NestLoggerModuleOptions) =>
            new NestLoggerService(createLoggerFactory(nodeAdapter, { label: 'global', ...options })()),
        },
      ],
      exports: [nestLoggerOptions, nestLoggerFactory, NestLoggerService],
    }
  }
}
