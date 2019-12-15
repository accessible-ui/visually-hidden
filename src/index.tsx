import React from 'react'

const __DEV__ =
  typeof process !== 'undefined' && process.env.NODE_ENV !== 'production'

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

const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({children}) => {
  const props = Object.assign({}, children.props)
  props.style = props.style
    ? Object.assign({}, visuallyHidden, props.style)
    : visuallyHidden
  return React.cloneElement(children, props)
}

if (__DEV__) {
  VisuallyHidden.displayName = 'VisuallyHidden'
}

export default VisuallyHidden
