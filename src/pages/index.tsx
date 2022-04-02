import { ReactElement } from 'react';

import { DefaultLayout } from '@/components/layouts/DefaultLayout';

import { useSampleQuery } from './generated';

const IndexPage = () => {
  const { data, loading } = useSampleQuery();

  return (
    <>
      {`${loading}`}
      {data?.users.map((user) => (
        <>
          <p>{user.id}</p>
          <p>{user.name}</p>
        </>
      ))}
    </>
  );
};

IndexPage.getLayout = (page: ReactElement) => (
  <DefaultLayout>{page}</DefaultLayout>
);

export default IndexPage;
