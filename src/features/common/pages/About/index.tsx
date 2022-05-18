import { Container, Typography } from '@mui/material';
import { VFC } from 'react';

import { Section } from '@/styles';

export const About: VFC = () => {
  return (
    <Section>
      <Container maxWidth="md">
        <Typography variant="h1" sx={{ pb: 3 }}>
          Norticleとは
        </Typography>
        <Typography sx={{ fontWeight: 'bold' }}>
          {`Norticleは断り方のテンプレート共有サイトです。\n自分がよく使う断り方を共有したり、自分が使いたい断り方を探すことができます。`}
        </Typography>
      </Container>
    </Section>
  );
};
