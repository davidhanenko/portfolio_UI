import { useContext, createContext, useState } from 'react';

interface IScrollState {
  scrollWithModal: boolean;
  setScrollWithModal: (scrollWithModal: boolean) => void;
}

const LocalStateContext = createContext<IScrollState | any>(
  false
);

const LocalStateProvider = LocalStateContext.Provider;

const ScrollProvider = ({ children }: any) => {
  const [scrollWithModal, setScrollWithModal] =
    useState<boolean>(false);

  const scrollCtx: IScrollState = {
    scrollWithModal,
    setScrollWithModal,
  };

  return (
    <LocalStateProvider value={scrollCtx}>
      {children}
    </LocalStateProvider>
  );
};

const useScroll = () => {
  const all = useContext(LocalStateContext);
  return all;
};

export { ScrollProvider, useScroll };
