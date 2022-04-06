import { Link as MuiLink } from '@mui/material';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { ReactNode,VFC } from 'react';

type LinkProps = Pick<NextLinkProps, 'href'> & {
  targetBlank?: boolean;
  readonly children: ReactNode;
};

export const Link: VFC<LinkProps> = ({ href, targetBlank, children }) => {
  return (
    <NextLink href={href} passHref>
      <MuiLink
        target={targetBlank ? '_blank' : undefined}
        rel="noopener noreferrer"
        underline="hover"
      >
        {children}
      </MuiLink>
    </NextLink>
  );
};
