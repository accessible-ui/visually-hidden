<hr>
<div align="center">
  <h1 align="center">
    &lt;VisuallyHidden&gt;
  </h1>
</div>

<p align="center">
  <a href="https://bundlephobia.com/result?p=@accessible/visually-hidden">
    <img alt="Bundlephobia" src="https://img.shields.io/bundlephobia/minzip/@accessible/visually-hidden?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Types" href="https://www.npmjs.com/package/@accessible/visually-hidden">
    <img alt="Types" src="https://img.shields.io/npm/types/@accessible/visually-hidden?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Code coverage report" href="https://codecov.io/gh/accessible-ui/visually-hidden">
    <img alt="Code coverage" src="https://img.shields.io/codecov/c/gh/accessible-ui/visually-hidden?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Build status" href="https://travis-ci.org/accessible-ui/visually-hidden">
    <img alt="Build status" src="https://img.shields.io/travis/accessible-ui/visually-hidden?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@accessible/visually-hidden">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@accessible/visually-hidden?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="License" href="https://jaredlunde.mit-license.org/">
    <img alt="MIT License" src="https://img.shields.io/npm/l/@accessible/visually-hidden?style=for-the-badge&labelColor=24292e">
  </a>
</p>

<pre align="center">npm i @accessible/visually-hidden</pre>
<hr>

A React component for adding visually hidden styles to elements

## Quick Start

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
