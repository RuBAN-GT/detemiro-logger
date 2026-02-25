import { LoggerAdapterProps } from '../interfaces'

import { LoggerFactory } from './logger-factory.type'

export type LoggerAdapter = (props: LoggerAdapterProps) => LoggerFactory
