import { useContext, createContext, useState } from 'react';

interface ContextState {
  isOpen: boolean;
}

const LocalStateContext =
  createContext<ContextState | null>(null);
const LocalStateProvider = LocalStateContext.Provider;

const NavStateProvider = ({ children }) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const closeNav = () => setOpen(false);

  return (
    <LocalStateProvider
      value={{
        isOpen,
        setOpen,
        closeNav,
      }}
    >
      {children}
    </LocalStateProvider>
  );
};
