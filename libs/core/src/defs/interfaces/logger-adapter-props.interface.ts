import { ContextIdGetter } from '../types'

export interface LoggerAdapterProps {
  application?: string
  env?: string
  label?: string
  getContextId?: ContextIdGetter
}
