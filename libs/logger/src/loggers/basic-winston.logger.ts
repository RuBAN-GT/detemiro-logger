import { addColors, createLogger, Logger as WinstonLogger, LoggerOptions, transports } from 'winston'

import { Logger, LoggerLevels, LoggerProps } from '../defs'

addColors(LoggerLevels.colors)

export class BasicWinstonLogger implements Logger {
  protected readonly logger: WinstonLogger

  constructor(protected readonly props: LoggerProps) {
    const transportOptions = this.isDebugEnabled ? { level: 'debug' } : undefined
    this.logger = createLogger({
      levels: LoggerLevels.levels,
      transports: [new transports.Console(transportOptions)],
      ...this.createLoggerOptions(),
    })
  }

  public get isDebugEnabled(): boolean {
    return process.env.NODE_ENV === 'development' || process.env.LOG_VERBOSE === 'true'
  }

  public warn(message: string, ...args: unknown[]): void {
    this.logger.log('warn', message, ...args)
  }

  public error(message: string, ...args: unknown[]): void {
    this.logger.log('error', message, ...args)
  }

  public fatal(message: string, ...args: unknown[]): void {
    this.logger.log('fatal', message, ...args)
  }

  public debug(message: string, ...args: unknown[]): void {
    this.logger.log('debug', message, ...args)
  }

  public info(message: string, ...args: unknown[]): void {
    this.logger.log('info', message, ...args)
  }

  public log(message: string, ...args: unknown[]): void {
    this.info(message, ...args)
  }

  protected createLoggerOptions(): LoggerOptions {
    return {}
  }
}
