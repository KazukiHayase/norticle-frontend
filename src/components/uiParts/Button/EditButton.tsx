import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, ButtonProps } from '@mui/material';
import { VFC } from 'react';

type EditButtonProps = ButtonProps;

export const EditButton: VFC<EditButtonProps> = (props) => (
  <Button
    color="inherit"
    size="small"
    variant="contained"
    startIcon={<FontAwesomeIcon icon={faPen} style={{ fontSize: 14 }} />}
    {...props}
  >
    編集
  </Button>
);
