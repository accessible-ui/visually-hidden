[![Bundlephobia](https://img.shields.io/bundlephobia/minzip/@accessible/visually-hidden?style=for-the-badge)](https://bundlephobia.com/result?p=@accessible/visually-hidden)
[![Code coverage](https://img.shields.io/codecov/c/gh/jaredLunde/accessible-visually-hidden?style=for-the-badge)](https://codecov.io/gh/jaredLunde/accessible-visually-hidden)
[![Build status](https://img.shields.io/travis/jaredLunde/accessible-visually-hidden?style=for-the-badge)](https://travis-ci.org/jaredLunde/accessible-visually-hidden)
[![License](https://img.shields.io/github/license/jaredLunde/accessible-visually-hidden?style=for-the-badge)](https://jaredlunde.mit-license.org/)

---

# @accessible/visually-hidden

A React component for adding visually hidden styles to elements

## Installation

#### `npm i @accessible/visually-hidden`

#### `yarn add @accessible/visually-hidden`

## Usage

Simply wrap a child element that accepts a `style` prop and this component will add visually hidden
styles to it without overwriting styles already present on the child.

```jsx harmony
import VisuallyHidden from '@accessible/visually-hidden'

export default props => (
  <VisuallyHidden>
    <input type="checkbox" {...props} />
  </VisuallyHidden>
)
// <input type='checkbox' style='...'/>
```

## LICENSE

MIT
