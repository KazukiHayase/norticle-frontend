import { ReactElement } from 'react';

import { DefaultLayout } from '@/components/layouts/DefaultLayout';
import { PostIndex } from '@/features/post/pages/PostIndex';

const IndexPage = () => {
  return <PostIndex />;
};

IndexPage.getLayout = (page: ReactElement) => (
  <DefaultLayout>{page}</DefaultLayout>
);

export default IndexPage;
