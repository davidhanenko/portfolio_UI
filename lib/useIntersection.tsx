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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
          observer.unobserve(element.current as Element );
        }
      },
      { rootMargin }
    );

    element.current && observer.observe(element.current);

    return () => observer.unobserve(element.current as Element);
  }, []);

  return isVisible;
};
