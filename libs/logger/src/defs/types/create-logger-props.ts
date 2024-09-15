import { LoggerAdapter } from '../enums'
import { LoggerProps } from '../interfaces'

export type CreateLoggerProps = LoggerProps & { adapter: LoggerAdapter }
