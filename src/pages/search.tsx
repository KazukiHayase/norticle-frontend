import { ReactElement } from 'react';

import { PostSearch } from '@/features/post/pages/PostSearch';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { NextPageWithLayout } from '@/pages/_app';

const Page: NextPageWithLayout = () => {
  return <PostSearch />;
};

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;
