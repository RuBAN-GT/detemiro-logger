import { Format } from 'logform'
import { format, LoggerOptions, transports } from 'winston'

import colors from '@colors/colors'

import { BasicWinstonLogger } from './basic-winston.logger'

export class ConsoleLogger extends BasicWinstonLogger {
  protected createLoggerOptions(): LoggerOptions {
    const options: LoggerOptions = {
      format: format.combine(format.splat(), format.timestamp(), format.colorize(), this.customFormat()),
    }
    if (this.isDebugEnabled) {
      options.transports = [new transports.Console({ level: 'debug' })]
    }

    return options
  }

  protected customFormat(): Format {
    const { label, getContextId } = this.props
    const defaultPrefix: string[] = []
    if (getContextId) {
      defaultPrefix.push(`[${getContextId()}]`)
    }
    defaultPrefix.push(`[${label}]`)

    return format.printf(({ level, message, timestamp }): string => {
      const prefix = defaultPrefix.concat([`[${colors.blue(level)}]`, `[${timestamp}]`]).join(' ')
      const formattedMessage = message.replace(/\n/g, ' ')

      return `${prefix} ${formattedMessage}`
    })
  }
}
