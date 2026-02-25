import { LoggerAdapterProps } from '../interfaces'

import { LoggerAdapter } from './logger-adapter.type'
import { LoggerFactory } from './logger-factory.type'

export type CreateLoggerFactory = (adapter: LoggerAdapter, props: LoggerAdapterProps) => LoggerFactory
