import { ReactElement } from 'react';

import { DefaultLayout } from '@/layouts/DefaultLayout';

const Page = () => {
  // TODO: デザイン調整
  return <>お探しのページは存在しません</>;
};

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;
