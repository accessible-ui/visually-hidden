[![bundlephobia](https://img.shields.io/bundlephobia/minzip/@accessible/visually-hidden?style=plastic)](https://bundlephobia.com/result?p=@accessible/visually-hidden)
[![codecov](https://codecov.io/gh/jaredLunde/accessible-visually-hidden/branch/master/graph/badge.svg)](https://codecov.io/gh/jaredLunde/accessible-visually-hidden)
[![Build Status](https://travis-ci.org/jaredLunde/accessible-visually-hidden.svg?branch=master)](https://travis-ci.org/jaredLunde/accessible-visually-hidden)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://jaredlunde.mit-license.org/)

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
    <input type='checkbox' {...props}/>
  </VisuallyHidden>
)
// <input type='checkbox' style='...'/>
```

## LICENSE

MIT
