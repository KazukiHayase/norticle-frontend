import { Container,Tab, Tabs } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState, VFC } from 'react';
import React from 'react';

import { NextLinkComposed } from '@/components/uiParts/Link';
import { pagesPath } from '@/lib/$path';

export const DashboardNav: VFC = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>(
    pagesPath.dashboard.$url().pathname,
  );

  useEffect(() => {
    setValue(router.pathname);
  }, [router.pathname]);

  return (
    <Container>
      <Tabs value={value}>
        <Tab
          label="投稿一覧"
          value={pagesPath.dashboard.$url().pathname}
          component={NextLinkComposed}
          to={pagesPath.dashboard.$url()}
        />
        <Tab
          label="サンプル"
          value={pagesPath.dashboard.sample.$url().pathname}
          component={NextLinkComposed}
          to={pagesPath.dashboard.sample.$url()}
        />
      </Tabs>
    </Container>
  );
};
