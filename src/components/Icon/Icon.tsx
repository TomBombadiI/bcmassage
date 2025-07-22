import './Icon.scss'
import clsx from 'clsx'
import { Icon as MinistaIcon } from 'minista'
import type { TIconProps } from './types'
import React from 'react'

export default (props: TIconProps) => {
  const { className, name, hasFill = false, ariaLabel, size } = props;

  let styleVars = {};
  if (size) {
    styleVars = {
      '--icon-size': size + 'px',
    } as React.CSSProperties;
  }

  return (
    <span className={clsx('icon', className)} aria-label={ariaLabel} style={styleVars}>
      <MinistaIcon
        iconId={name}
        fill={hasFill ? 'currentColor' : 'none'}
        stroke={hasFill ? 'none' : 'currentColor'}
      />
    </span>
  )
}
