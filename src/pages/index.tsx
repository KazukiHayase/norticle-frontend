import { ReactElement } from 'react';

import { PostIndex } from '@/features/post/pages/PostIndex';
import { DefaultLayout } from '@/layouts/DefaultLayout';

const IndexPage = () => {
  return <PostIndex />;
};

IndexPage.getLayout = (page: ReactElement) => (
  <DefaultLayout>{page}</DefaultLayout>
);

export default IndexPage;
