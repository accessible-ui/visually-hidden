import * as React from 'react'

export const VisuallyHidden = ({children}: VisuallyHiddenProps) =>
  React.cloneElement(
    children,
    Object.assign({}, children.props, {
      style: Object.assign({}, visuallyHidden, children.props.style),
    })
  )

export const visuallyHidden = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: 1,
  width: 1,
  margin: -1,
  padding: 0,
  overflow: 'hidden',
  position: 'absolute',
}

export interface VisuallyHiddenProps {
  children: React.ReactElement | JSX.Element
}

if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production') {
  VisuallyHidden.displayName = 'VisuallyHidden'
}
