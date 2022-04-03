import { ReactElement } from 'react';

import { DefaultLayout } from '@/components/layouts/DefaultLayout';
import { PostAdd } from '@/features/post/pages/PostAdd';

const Page = () => {
  return <PostAdd />;
};

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;
