import { Dispatch, SetStateAction, useCallback, useState } from 'react';

interface useDisclosureOutput {
  isOpen: boolean;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export function useDisclosure(defaultValue?: boolean): useDisclosureOutput {
  // Initial value is false
  const [isOpen, setIsOpened] = useState(!!defaultValue);

  const open = useCallback(() => setIsOpened(true), []);
  const close = useCallback(() => setIsOpened(false), []);
  const toggle = useCallback(() => setIsOpened((x) => !x), []);

  return { isOpen, setIsOpened, open, close, toggle };
}
