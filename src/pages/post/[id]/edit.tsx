import { withAuthenticationRequired } from '@auth0/auth0-react';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { DefaultLayout } from '@/components/layouts/DefaultLayout';
import { PostEdit } from '@/features/post/pages/PostEdit';
import { pagesPath } from '@/lib/$path';
import { NextPageWithLayout } from '@/pages/_app';

const Page: NextPageWithLayout = withAuthenticationRequired(() => {
  const router = useRouter();
  const isReady = router.isReady;
  if (!isReady) return <></>;

  const postId = parseInt(router.query.id as string, 10);
  if (isNaN(postId)) {
    router.replace(pagesPath.$404.$url());
    return <></>;
  }

  return <PostEdit postId={postId} />;
});

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;
