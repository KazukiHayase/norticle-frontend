import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

import { ModalHookResult } from '@/hooks/useModal';

export type ConfirmModalProps = {
  modal: ModalHookResult;
  title: string;
  message: string;
  action: string;
  handleAction: () => void;
  handleClose?: () => void;
};

export const ConfirmModal: React.VFC<ConfirmModalProps> = ({
  modal: { isOpen, close },
  title,
  message,
  action = '削除',
  handleAction,
  handleClose = close,
}): React.ReactElement => {
  return (
    <Dialog fullWidth maxWidth="xs" open={isOpen} onClose={handleClose}>
      <DialogTitle sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          color="inherit"
          onClick={handleClose}
          sx={{ fontWeight: 'bold' }}
        >
          キャンセル
        </Button>
        <Button
          color="error"
          onClick={handleAction}
          sx={{ fontWeight: 'bold' }}
        >
          {action}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
