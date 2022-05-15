import {
  useRef,
  useContext,
  createContext,
  RefObject,
} from 'react';

export interface IScrollProps {
  scrollRef: RefObject<HTMLDivElement>;
}

const ScrollContext = createContext<IScrollProps | any>(
  false
);

const ScrollContextProvider = ScrollContext.Provider;

function ScrollProvider({ children }: any) {
  const scrollRef = useRef({
    scrollPos: 0,
  });

  return (
    <ScrollContextProvider value={{ scrollRef }}>
      {children}
    </ScrollContextProvider>
  );
}

function useScroll() {
  const all = useContext(ScrollContext);
  return all;
}

export { ScrollProvider, useScroll };
