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
    const { label, getContextId, env = 'stage', application = 'application' } = this.props
    const defaultPrefix: string[] = []
    if (typeof getContextId === 'function') {
      defaultPrefix.push(`[${getContextId()}]`)
    } else {
      defaultPrefix.push('[root]')
    }
    defaultPrefix.push(`[${label}]`)

    return format.printf(({ level, timestamp, message }): string => {
      const prefix = defaultPrefix.concat([`[${colors.blue(String(level))}]`, `[${String(timestamp)}]`])
      if (process.env.LOG_VERBOSE) {
        prefix.push(`[${colors.blue(`${application}/${env}`)}]`)
      }
      const formattedMessage = typeof message === 'string' ? message.replace(/\n/g, ' ') : String(message)

      return `${prefix.join('')} ${formattedMessage}`
    })
  }
}
