import { Logger, LoggerAdapter, LoggerAdapterProps, LoggerFactory } from 'detemiro-logger'

import { ConsoleLogger } from './loggers'

export const browserAdapter: LoggerAdapter = (props: LoggerAdapterProps): LoggerFactory => {
  const browserWindow =
    typeof window !== 'undefined' ? (window as Window & { applicationName?: string; env?: string }) : undefined
  const application = browserWindow?.applicationName || 'application'
  const env = browserWindow?.env || 'development'

  return (label: string = 'general') => new ConsoleLogger({ ...props, label, env, application })
}

export const loggerFactory: LoggerFactory = browserAdapter({
  application:
    typeof window !== 'undefined'
      ? (window as Window & { applicationName?: string }).applicationName || 'application'
      : 'application',
  env: typeof window !== 'undefined' ? (window as Window & { env?: string }).env || 'development' : 'development',
})

export const logger: Logger = loggerFactory('general')
