import { ReactElement } from 'react';

import { NotFound } from '@/features/common/pages/NotFound';
import { DefaultLayout } from '@/layouts/DefaultLayout';

const Page = () => <NotFound />;

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;
