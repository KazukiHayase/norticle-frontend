import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { PostTaggedIndex } from '@/features/post/pages/PostTaggedIndex';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { pagesPath } from '@/lib/$path';

// See: https://github.com/vercel/next.js/discussions/11484#discussioncomment-356055
const Page = () => {
  const router = useRouter();
  const isReady = router.isReady;
  if (!isReady) return <></>;

  const tagName = router.query.name;
  if (typeof tagName !== 'string') {
    router.replace(pagesPath.$404.$url());
    return <></>;
  }

  return <PostTaggedIndex tagName={tagName} />;
};

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;
