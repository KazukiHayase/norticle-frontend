import { Box, Button, Container, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { VFC } from 'react';

export const ErrorFallback: VFC = () => {
  return (
    <Box sx={{ py: 20 }}>
      <Container maxWidth="md">
        <Typography variant="h3" sx={{ textAlign: 'center', color: grey[600] }}>
          予期せぬエラーが発生しました
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', pt: 5 }}>
          <Button
            variant="contained"
            color="inherit"
            onClick={() => window.location.assign(window.location.origin)}
            sx={{ fontWeight: 'bold' }}
          >
            トップページへ戻る
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
