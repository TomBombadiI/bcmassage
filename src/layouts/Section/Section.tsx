import './Section.scss'
import type { TSectionProps } from './types'
import clsx from 'clsx'

export default (props: TSectionProps) => {
  const { className, title, titleId, actions, children } = props

  return (
    <section
      className={clsx('section', 'container', className)}
      aria-labelledby={titleId}
    >
      <header className="section__header">
        <h2 className="section__title" id={titleId}>
          {title}
        </h2>
        <div className="section__actions">
          {actions}
        </div>
      </header>
      <div className="section__body">{children}</div>
    </section>
  )
}
