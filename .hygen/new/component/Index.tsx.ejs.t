---
to: <%= path %>/index.tsx
---
import { VFC } from 'react'

<% if (haveStyle) { -%>
import { MyComponent } from './style'
<% } -%>

type <%= componentName %>Props = {};

export const <%= componentName %>: VFC<<%= componentName %>Props> = () => {
  return (
    <>
      <h1>Hello <%= componentName %></h1>
    </>
  );
};
