import { useContext, createContext, useState } from 'react';

export interface IAnimationState {
  nameAnimationEnd: boolean;
  setNameAnimationEnd: (nameAnimationEnd: boolean) => void;
}

const LocalStateContext = createContext<
  IAnimationState | any
>(false);

const LocalStateProvider = LocalStateContext.Provider;

const AnimationStateProvider = ({ children }: any) => {
  const [nameAnimationEnd, setNameAnimationEnd] =
    useState<boolean>(false);

  const animationCtx: IAnimationState = {
    nameAnimationEnd,
    setNameAnimationEnd,
  };

  return (
    <LocalStateProvider value={animationCtx}>
      {children}
    </LocalStateProvider>
  );
};

const useAnimation = () => {
  const all = useContext(LocalStateContext);
  return all;
};

export { AnimationStateProvider, useAnimation };
