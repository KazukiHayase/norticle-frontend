import { ReactElement } from 'react';

import { About } from '@/features/common/pages/About';
import { DefaultLayout } from '@/layouts/DefaultLayout';

const Page = () => <About />;

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;
