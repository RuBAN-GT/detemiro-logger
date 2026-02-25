import { Format } from 'logform'
import { format, LoggerOptions } from 'winston'

import { BasicWinstonLogger } from './basic-winston.logger'

export class JsonLogger extends BasicWinstonLogger {
  protected createLoggerOptions(): LoggerOptions {
    return { format: format.combine(format.splat(), format.timestamp(), this.customFormat()) }
  }

  protected customFormat(): Format {
    const { label = 'global', getContextId, env = 'stage', application = 'application' } = this.props
    const defaultMessage: Record<string, string> = { label, app: application, env }
    defaultMessage.contextId = typeof getContextId === 'function' ? getContextId() : 'root'

    return format.printf(({ level, message, timestamp }) =>
      JSON.stringify({ ...defaultMessage, '@timestamp': timestamp, level, message }),
    )
  }
}
