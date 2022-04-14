import { Container, Divider, Tab, Tabs, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState, VFC } from 'react';
import React from 'react';

import { NextLinkComposed } from '@/components/uiParts/Link';
import { pagesPath } from '@/lib/$path';

const dashboardList = {
  [pagesPath.dashboard.$url().pathname]: '投稿一覧',
  [pagesPath.setting.$url().pathname]: '各種設定',
} as const;
type dashboardList = typeof dashboardList[keyof typeof dashboardList];

export const DashboardNav: VFC = () => {
  const router = useRouter();
  const [value, setValue] = useState<keyof typeof dashboardList>(
    pagesPath.dashboard.$url().pathname,
  );

  useEffect(() => {
    setValue(router.pathname as keyof typeof dashboardList);
  }, [router.pathname]);

  return (
    <>
      <Container maxWidth="md">
        <Tabs value={value}>
          <Tab
            component={NextLinkComposed}
            to={pagesPath.dashboard.$url()}
            label={dashboardList[pagesPath.dashboard.$url().pathname]}
            value={pagesPath.dashboard.$url().pathname}
            sx={{ fontWeight: 'bold' }}
          />
          <Tab
            component={NextLinkComposed}
            to={pagesPath.setting.$url()}
            label={dashboardList[pagesPath.setting.$url().pathname]}
            value={pagesPath.setting.$url().pathname}
            sx={{ fontWeight: 'bold' }}
          />
        </Tabs>
      </Container>
      <Divider />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h1">{dashboardList[value]}</Typography>
      </Container>
      <Divider />
    </>
  );
};
