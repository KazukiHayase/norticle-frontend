import { ReactElement } from 'react';

import { Privacy } from '@/features/common/pages/Privacy';
import { DefaultLayout } from '@/layouts/DefaultLayout';

const Page = () => <Privacy />;

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;
