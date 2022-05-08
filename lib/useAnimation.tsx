import { useContext, createContext, useState } from 'react';

export interface IAnimationState {
  animateGreet: boolean;
  setAnimateGreet: (animateGreet: boolean) => void;
}

const LocalStateContext = createContext<
  IAnimationState | any
>(false);

const LocalStateProvider = LocalStateContext.Provider;

const AnimationStateProvider = ({ children }: any) => {
  const [animateGreet, setAnimateGreet] =
    useState<boolean>(false);

  const animationCtx: IAnimationState = {
    animateGreet,
    setAnimateGreet,
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
