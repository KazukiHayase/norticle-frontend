import { ReactElement } from 'react';

import { DefaultLayout } from '@/components/layouts/DefaultLayout';

const Page = () => {
  return (
    <>
      <h1>テンプレート詳細</h1>
    </>
  );
};

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;
