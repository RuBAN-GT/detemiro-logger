import { CreateLoggerFactory, LoggerAdapter, LoggerAdapterProps, LoggerFactory } from '../defs'

export const createLoggerFactory: CreateLoggerFactory = (
  adapter: LoggerAdapter,
  props: LoggerAdapterProps,
): LoggerFactory => adapter({ ...props, label: props.label || 'global' })
