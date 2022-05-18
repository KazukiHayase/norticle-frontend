import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { VFC } from 'react';

import { Link, NextLinkComposed } from '@/components/uiParts/Link';
import { pagesPath } from '@/lib/$path';

import { Logo } from './style';

export const Footer: VFC = () => {
  return (
    <Box sx={{ py: 5 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', pb: 15 }}>
          <Link href={pagesPath.$url()}>
            <Logo>
              <Image src="/images/logo.png" width={120} height={40} />
            </Logo>
          </Link>
          <Box sx={{ display: 'flex', gap: 5 }}>
            <Stack spacing={1}>
              <Typography sx={{ fontWeight: 'bold' }}>ガイド</Typography>
              <Typography
                component={NextLinkComposed}
                to={pagesPath.$url()}
                sx={{ ':hover': { textDecoration: 'underline' } }}
              >
                ホーム
              </Typography>
              <Typography
                component={NextLinkComposed}
                to={pagesPath.about.$url()}
                sx={{ ':hover': { textDecoration: 'underline' } }}
              >
                Norticleとは
              </Typography>
            </Stack>
            <Stack spacing={1}>
              <Typography sx={{ fontWeight: 'bold' }}>運営</Typography>
              <Typography
                component={NextLinkComposed}
                to={pagesPath.terms.$url()}
                sx={{ ':hover': { textDecoration: 'underline' } }}
              >
                利用規約
              </Typography>
              <Typography
                component={NextLinkComposed}
                to={pagesPath.privacy.$url()}
                sx={{ ':hover': { textDecoration: 'underline' } }}
              >
                プライバシーポリシー
              </Typography>
              <Typography
                component={NextLinkComposed}
                target="_blank"
                rel="noopener noreferrer"
                to="https://twitter.com/bbF1wIpYYsTc1yN"
                sx={{ ':hover': { textDecoration: 'underline' } }}
              >
                運営者
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Divider />
        <Typography color="text.secondary" sx={{ pt: 3 }}>
          © 2022 Norticle
        </Typography>
      </Container>
    </Box>
  );
};
