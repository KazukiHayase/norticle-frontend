import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { DefaultLayout } from '@/components/layouts/DefaultLayout';
import { PostDetail } from '@/features/post/pages/PostDetail';
import { pagesPath } from '@/lib/$path';

// See: https://github.com/vercel/next.js/discussions/11484#discussioncomment-356055
const Page = () => {
  const router = useRouter();
  const isReady = router.isReady;
  if (!isReady) return <></>;

  const postId = parseInt(router.query.id as string, 10);
  if (isNaN(postId)) {
    router.replace(pagesPath.$404.$url());
    return <></>;
  }

  return <PostDetail postId={postId} />;
};

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;
