---
to: <%= path %>/index.tsx
---
import { VFC } from 'react'

<% if (haveStyle) { -%>
import { MyComponent } from './style'
<% } -%>

type <%= pageName %>Props = {};

export const <%= pageName %>: VFC<<%= pageName %>Props> = () => {
  return (
    <>
      <h1>Hello <%= pageName %></h1>
    </>
  );
};
