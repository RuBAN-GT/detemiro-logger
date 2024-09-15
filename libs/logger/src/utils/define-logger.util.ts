import { Logger, LoggerAdapter, LoggerDefinition, LoggerFactory } from '../defs'

import { createLogger } from './create-logger.util'

export function defineLogger(definition: LoggerDefinition = {}): LoggerFactory {
  const { adapter = process.env.NODE_ENV === 'production' ? LoggerAdapter.JsonLogger : LoggerAdapter.ConsoleLogger } =
    definition

  return (label: string = 'General'): Logger => createLogger({ label, adapter })
}
