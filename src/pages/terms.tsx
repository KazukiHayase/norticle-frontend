import { ReactElement } from 'react';

import { Terms } from '@/features/common/pages/Terms';
import { DefaultLayout } from '@/layouts/DefaultLayout';

const Page = () => <Terms />;

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;
