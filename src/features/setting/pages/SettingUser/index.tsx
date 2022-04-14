import { Container } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { VFC } from 'react';

import { Section } from '@/styles';

type SettingUserProps = {
  sample: string;
};

export const SettingUser: VFC<SettingUserProps> = () => {
  return (
    <Section sx={{ bgcolor: blueGrey[50] }}>
      <Container maxWidth="md">aaaa</Container>
    </Section>
  );
};
