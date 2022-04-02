import { VFC } from 'react';

import { useFetchPostsQuery } from './generated';

export const PostIndex: VFC = () => {
  const { data } = useFetchPostsQuery();
  if (data) console.log(JSON.stringify(data.posts));

  return (
    <>
      <h1>PostIndex</h1>
    </>
  );
};
