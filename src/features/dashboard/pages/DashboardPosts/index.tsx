import { Container, Paper } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { VFC } from 'react';

import { Section } from '@/styles';

type DashboardPostsProps = {
  tmp?: string;
};

export const DashboardPosts: VFC<DashboardPostsProps> = () => {
  return (
    <>
      <Section sx={{ bgcolor: blueGrey[50] }}>
        <Container maxWidth="md">
          <Paper sx={{ p: 3 }}>sample</Paper>
        </Container>
      </Section>
    </>
  );
};
