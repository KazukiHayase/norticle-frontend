import { Button } from '@mui/material';
import { useState, VFC } from 'react';

import { Wrapper } from './style';

type PaginationProps = {
  totalPage: number;
  onChange: (page: number) => void;
};

export const Pagination: VFC<PaginationProps> = ({ totalPage, onChange }) => {
  const [page, setPage] = useState<number>(1);

  return (
    <Wrapper>
      {page > 1 && (
        <Button
          variant="contained"
          color="inherit"
          sx={{ fontWeight: 'bold' }}
          onClick={() => {
            setPage(page - 1);
            onChange(page - 1);
          }}
        >
          前のページ
        </Button>
      )}
      {page < totalPage && (
        <Button
          variant="contained"
          color="info"
          sx={{ fontWeight: 'bold' }}
          onClick={() => {
            setPage(page + 1);
            onChange(page + 1);
          }}
        >
          次のページ
        </Button>
      )}
    </Wrapper>
  );
};
