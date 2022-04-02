import { Container, Typography } from '@mui/material';
import { VFC } from 'react';

import { Section } from '@/styles';

import { useFetchPostsQuery } from './generated';

export const PostIndex: VFC = () => {
  const { data } = useFetchPostsQuery();
  if (data) console.log(JSON.stringify(data.posts));

  return (
    <>
      <Section>
        <Container maxWidth="md">
          <Typography variant="h1">テンプレート一覧</Typography>
        </Container>
      </Section>
    </>
  );
};
