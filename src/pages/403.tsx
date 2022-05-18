import { ReactElement } from 'react';

import { Forbidden } from '@/features/common/pages/Forbidden';
import { DefaultLayout } from '@/layouts/DefaultLayout';

const Page = () => <Forbidden />;

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;
