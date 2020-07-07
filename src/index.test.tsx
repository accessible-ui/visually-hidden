import * as React from 'react'
import {render} from '@testing-library/react'
import {VisuallyHidden} from './index'

describe('<VisuallyHidden>', () => {
  it('should add styles', () => {
    expect(
      render(
        <VisuallyHidden>
          <span>Foo</span>
        </VisuallyHidden>
      ).asFragment()
    ).toMatchSnapshot('Without child styles')

    expect(
      render(
        <VisuallyHidden>
          <span style={{textAlign: 'center'}}>Foo</span>
        </VisuallyHidden>
      ).asFragment()
    ).toMatchSnapshot('With child styles')
  })
})
