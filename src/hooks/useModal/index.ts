import { useCallback, useState } from 'react';

export type ModalHookResult = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useModal = (initialState = false): ModalHookResult => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  const open = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const close = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return {
    isOpen,
    open,
    close,
  };
};
