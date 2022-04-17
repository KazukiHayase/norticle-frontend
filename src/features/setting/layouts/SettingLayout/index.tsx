import { Box, Container } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { ReactNode } from 'react';

import { SettingSideMenu } from '@/features/setting/components/SettingSideMenu';
import { Section } from '@/styles';

type SettingLayoutProps = {
  readonly children: ReactNode;
};

export const SettingLayout: React.VFC<SettingLayoutProps> = ({ children }) => {
  return (
    <Section sx={{ bgcolor: blueGrey[50] }}>
      <Container maxWidth="md" sx={{ display: 'flex', gap: 3 }}>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <SettingSideMenu />
        </Box>
        <Box sx={{ flex: 1 }}>{children}</Box>
      </Container>
    </Section>
  );
};
