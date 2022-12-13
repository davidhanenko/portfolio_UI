import { useState, useEffect } from 'react';
import { RefObject } from 'react';

export interface IIntersection {
  element: RefObject<HTMLDivElement>;
  rootMargin: string;
}

export const useIntersection = ({
  element,
  rootMargin,
}: IIntersection) => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    let cur = element.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
          observer.unobserve(cur as Element);
        }
      },
      { rootMargin }
    );

    cur && observer.observe(cur);

    return () => observer.unobserve(cur as Element);
  }, [element, rootMargin]);

  return isVisible;
};
