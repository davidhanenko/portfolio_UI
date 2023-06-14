import { useContext, createContext, useState } from 'react';

interface IScrollState {
  scrollWithModal: boolean;
  setScrollWithModal: (scrollWithModal: boolean) => void;
  scrollProjectsInView: boolean;
  setScrollProjectsInView: (scrollProjectsInView: boolean) => void;
}

const LocalStateContext = createContext<IScrollState | any>(
  false
);

const LocalStateProvider = LocalStateContext.Provider;

const ScrollProvider = ({ children }: any) => {
  const [scrollWithModal, setScrollWithModal] =
    useState<boolean>( false );
  const [scrollProjectsInView, setScrollProjectsInView] = useState<boolean>( false );

  const scrollCtx: IScrollState = {
    scrollWithModal,
    setScrollWithModal,
    scrollProjectsInView,
    setScrollProjectsInView,
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
