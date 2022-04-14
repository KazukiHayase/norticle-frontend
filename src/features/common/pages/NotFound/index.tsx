import { Box, Button, Container, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { VFC } from 'react';

import { NextLinkComposed } from '@/components/uiParts/Link';
import { pagesPath } from '@/lib/$path';
import { Section } from '@/styles';

export const NotFound: VFC = () => {
  return (
    <Section>
      <Container maxWidth="md">
        <Typography
          component="h1"
          sx={{ fontSize: 60, fontWeight: 'bold', textAlign: 'center' }}
        >
          404
        </Typography>
        <Typography variant="h3" sx={{ textAlign: 'center', color: grey[600] }}>
          お探しのページは存在しないか、すでに削除された可能性があります
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', pt: 5 }}>
          <Button
            component={NextLinkComposed}
            to={pagesPath.$url()}
            variant="contained"
            color="inherit"
            sx={{ fontWeight: 'bold' }}
          >
            トップページへ戻る
          </Button>
        </Box>
      </Container>
    </Section>
  );
};
