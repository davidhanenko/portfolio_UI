import { useContext, createContext, useState } from 'react';

 interface INavState {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  toggleNav: (isOpen: boolean) => void;
  closeNav: (isOpen: boolean) => void;
}

const LocalStateContext = createContext<INavState | any>(
  false
);

const LocalStateProvider = LocalStateContext.Provider;

const NavStateProvider = ({ children }: any) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setOpen(!isOpen);
  };

  const closeNav = () => setOpen(false);

  const navCtx: INavState = {
    isOpen,
    setOpen,
    toggleNav,
    closeNav,
  };

  return (
    <LocalStateProvider value={navCtx}>
      {children}
    </LocalStateProvider>
  );
};

const useNav = () => {
  const all = useContext(LocalStateContext);
  return all;
};

export { NavStateProvider, useNav };
