import { Logger, LoggerAdapter, LoggerAdapterProps, LoggerFactory } from 'detemiro-logger'

import { ConsoleLogger, JsonLogger } from './loggers'

export const nodeAdapter: LoggerAdapter = (props: LoggerAdapterProps): LoggerFactory => {
  const loggerDefinition =
    process.env.NODE_ENV === 'production' || props.env === 'production' ? JsonLogger : ConsoleLogger
  const application = props.application || process.env.SERVICE_NAME || 'application'

  return (label: string = 'general') => new loggerDefinition({ ...props, label, application })
}

export const loggerFactory: LoggerFactory = nodeAdapter({})
export const logger: Logger = loggerFactory('general')
