import { DynamicModule, ForwardReference, InjectionToken, OptionalFactoryDependency, Type } from '@nestjs/common'

import { NestLoggerModuleOptions } from './nest-logger-module-options.interface'

export interface NestLoggerAsyncModuleArgs {
  imports?: Array<Type<unknown> | DynamicModule | Promise<DynamicModule> | ForwardReference>
  inject?: Array<InjectionToken | OptionalFactoryDependency>
  useFactory: (...args: unknown[]) => Promise<NestLoggerModuleOptions> | NestLoggerModuleOptions
}
