import { Format } from 'logform'
import { format, LoggerOptions } from 'winston'

import { BasicWinstonLogger } from './basic-winston.logger'

export class JsonLogger extends BasicWinstonLogger {
  protected createLoggerOptions(): LoggerOptions {
    return { format: format.combine(format.splat(), format.timestamp(), this.customFormat()) }
  }

  protected customFormat(): Format {
    const { label, getContextId } = this.props
    const defaultMessage: Record<string, string> = { label }
    if (getContextId) {
      defaultMessage.contextId = getContextId()
    }

    return format.printf(({ level, message, timestamp }) =>
      JSON.stringify({ ...defaultMessage, timestamp, level, message }),
    )
  }
}
