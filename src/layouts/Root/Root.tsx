import './Root.scss'
import type { TRootProps } from './types'

export default (props: TRootProps) => {
  const { children } = props

  return <div id='root'>{children}</div>
}
