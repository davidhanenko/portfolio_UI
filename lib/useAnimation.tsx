import { useContext, createContext, useState } from 'react';

export interface IAnimationState {
  animateBg: boolean;
  setAnimateBg: (animateBg: boolean) => void;
}

const LocalStateContext = createContext<
  IAnimationState | any
>(false);

const LocalStateProvider = LocalStateContext.Provider;

const AnimationStateProvider = ({ children }: any) => {
  const [animateBg, setAnimateBg] =
    useState<boolean>(false);

  const animationCtx: IAnimationState = {
    animateBg,
    setAnimateBg,
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
