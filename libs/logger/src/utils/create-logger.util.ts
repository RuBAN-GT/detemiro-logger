import { CreateLoggerProps, Logger, LoggerAdapter } from '../defs'
import { ConsoleLogger, JsonLogger } from '../loggers'

export function createLogger(props: CreateLoggerProps): Logger {
  switch (props.adapter) {
    case LoggerAdapter.ConsoleLogger:
      return new ConsoleLogger(props)
    case LoggerAdapter.JsonLogger:
      return new JsonLogger(props)
    default:
      throw new Error('Unsupported logger adapter.')
  }
}
