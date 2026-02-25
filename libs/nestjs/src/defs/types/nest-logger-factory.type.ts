import { NestLoggerService } from '../../nest-logger.service'

export type NestLoggerFactory = (label?: string) => NestLoggerService
