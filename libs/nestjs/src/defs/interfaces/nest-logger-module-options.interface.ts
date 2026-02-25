import { ContextIdGetter } from 'detemiro-logger'

export interface NestLoggerModuleOptions {
  application?: string
  env?: string
  getContextId?: ContextIdGetter
}
