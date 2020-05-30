import * as React from 'react'
declare const VisuallyHidden: React.FC<VisuallyHiddenProps>
export declare const visuallyHidden: {
  border: number
  clip: string
  height: number
  width: number
  margin: number
  padding: number
  overflow: string
  position: string
}
export interface VisuallyHiddenProps {
  children: React.ReactElement | JSX.Element
}
export default VisuallyHidden
