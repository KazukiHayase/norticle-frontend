import { Button } from '@mui/material';
import { VFC } from 'react';

import {
  NextLinkComposed,
  NextLinkComposedProps,
} from '@/components/uiParts/Link';

import { Wrapper } from './style';

type PaginationProps = {
  page: number;
  totalPage: number;
  prevPageLink: NextLinkComposedProps['to'];
  nextPageLink: NextLinkComposedProps['to'];
};

export const Pagination: VFC<PaginationProps> = ({
  page,
  totalPage,
  prevPageLink,
  nextPageLink,
}) => {
  return (
    <Wrapper>
      {page > 1 && (
        <Button
          component={NextLinkComposed}
          to={prevPageLink}
          variant="contained"
          color="inherit"
          sx={{ fontWeight: 'bold' }}
        >
          前のページ
        </Button>
      )}
      {page < totalPage && (
        <Button
          component={NextLinkComposed}
          to={nextPageLink}
          variant="contained"
          color="info"
          sx={{ fontWeight: 'bold' }}
        >
          次のページ
        </Button>
      )}
    </Wrapper>
  );
};
