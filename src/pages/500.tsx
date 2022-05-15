import { ReactElement } from 'react';

import { ErrorFallback } from '@/features/common/pages/ErrorFallback';
import { DefaultLayout } from '@/layouts/DefaultLayout';

const Page = () => <ErrorFallback />;

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;
