import { ReactElement } from 'react';

import { DefaultLayout } from '@/components/layouts/DefaultLayout';

const Page = () => {
  // TODO: デザイン調整
  return <>この操作は許可されていません</>;
};

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;
