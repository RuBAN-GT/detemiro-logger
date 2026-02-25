import { createLoggerFactory } from 'detemiro-logger'
import { nodeAdapter } from 'detemiro-logger-node'

const loggerFactory = createLoggerFactory(nodeAdapter, {
  application: 'my-app',
  getContextId: () => Math.random().toString(36).substring(2, 15),
  env: 'development',
})
const logger = loggerFactory('my-service')

logger.debug('Hello %s', 'world')
logger.error('My error: %o', { details: 'Test' })
logger.fatal('Fatal message.')
logger.warn('Warn message.')
logger.info('Info message.')
logger.info('Info Object %o', { hello: 'world' })
logger.info('%o', { hello: 'world' })
