import { Logger } from 'detemiro-logger'

import { LoggerService } from '@nestjs/common'

export class NestLoggerService implements LoggerService {
  constructor(protected readonly logger: Logger) {}

  public log(message: string, ...args: unknown[]): void {
    this.logger.info(message, ...args)
  }

  public error(message: string, ...args: unknown[]): void {
    this.logger.error(message, ...args)
  }

  public warn(message: string, ...args: unknown[]): void {
    this.logger.warn(message, ...args)
  }

  public debug(message: string, ...args: unknown[]): void {
    this.logger.debug(message, ...args)
  }

  public verbose(message: string, ...args: unknown[]): void {
    this.logger.debug(message, ...args)
  }

  public fatal(message: string, ...args: unknown[]): void {
    this.logger.fatal(message, ...args)
  }
}
