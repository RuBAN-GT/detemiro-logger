import { LoggerAdapter, defineLogger } from 'detemiro-logger'

const logger = defineLogger({ adapter: LoggerAdapter.JsonLogger })()

logger.debug('Hello %s', 'world')
logger.error('My error: %o', { details: 'Test' })
logger.fatal('Fatal message.')
logger.warn('Warn message.')
logger.info('Info message.')
logger.info('Info Object %o', { hello: 'world' })
logger.info('%o', { hello: 'world' })
