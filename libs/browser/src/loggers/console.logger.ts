import { Logger, LoggerAdapterProps } from 'detemiro-logger'

import { LogLevel } from '../defs'

export class ConsoleLogger implements Logger {
  protected readonly defaultPrefix: string[] = []

  constructor(props: LoggerAdapterProps) {
    const { label = 'global', application = 'application', env = 'stage', getContextId } = props

    if (typeof getContextId === 'function') {
      this.defaultPrefix.push(`[${getContextId()}]`)
    }
    this.defaultPrefix.push(`[${label}]`)
    this.defaultPrefix.push(`[${new Date().toISOString()}]`)
    this.defaultPrefix.push(`[${application}/${env}]`)
  }

  public print(level: LogLevel, message: string, ...args: unknown[]): void {
    console[level](`${this.defaultPrefix.join('')} ${message}`, ...args)
  }

  public log(message: string, ...args: unknown[]): void {
    this.print(LogLevel.log, message, ...args)
  }

  public info(message: string, ...args: unknown[]): void {
    this.print(LogLevel.info, message, ...args)
  }

  public debug(message: string, ...args: unknown[]): void {
    this.print(LogLevel.debug, message, ...args)
  }

  public warn(message: string, ...args: unknown[]): void {
    this.print(LogLevel.warn, message, ...args)
  }

  public error(message: string, ...args: unknown[]): void {
    this.print(LogLevel.error, message, ...args)
  }

  public fatal(message: string, ...args: unknown[]): void {
    this.print(LogLevel.error, message, ...args)
  }
}
