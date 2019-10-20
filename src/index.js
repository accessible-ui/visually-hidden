import React from 'react'

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

const VisuallyHidden = ({children}) => {
  const props = Object.assign({}, children.props)
  props.style = props.style
    ? Object.assign({}, visuallyHidden, props.style)
    : visuallyHidden
  return React.cloneElement(children, props)
}

if (__DEV__) {
  const PropTypes = require('prop-types')
  VisuallyHidden.propTypes = {
    children: PropTypes.element.isRequired
  }
}

export default VisuallyHidden