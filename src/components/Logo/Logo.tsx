import './Logo.scss'
import clsx from 'clsx'
import type { TLogoProps } from './types'

export default (props: TLogoProps) => {
  const { className, loading = 'lazy' } = props

  const title = 'Home'

  return (
    <a
      className={clsx('logo', className)}
      href="/"
      title={title}
      aria-label={title}
    >
      <img
        className="logo__image"
        src="/images/logo.png"
        alt=""
        width={144}
        height={96}
        loading={loading}
      />
    </a>
  )
}
