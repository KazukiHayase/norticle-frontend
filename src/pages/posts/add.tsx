import { withAuthenticationRequired } from '@auth0/auth0-react';
import { ReactElement } from 'react';

import { PostAdd } from '@/features/post/pages/PostAdd';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { NextPageWithLayout } from '@/pages/_app';

const Page: NextPageWithLayout = withAuthenticationRequired(() => {
  return <PostAdd />;
});

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;
