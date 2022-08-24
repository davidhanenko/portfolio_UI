import React, {
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  FaChevronRight,
  FaChevronLeft,
} from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

import { SliderContainer } from './SliderStyles';

interface ISlidesProps {
  slides: any;
  slideRef: RefObject<HTMLDivElement>;
  showModal: boolean;
  setTouchStart: (e: TouchEvent) => void;
  handleTouchMove: (e: TouchEvent) => void;
  handleTouchEnd: () => void;
}

const Slider: React.FC<ISlidesProps> = ({
  showModal,
  slides,
  slideRef,
}) => {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const slideImgRef = useRef<HTMLDivElement>(null);

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const length = slides.length;

  // next slide
  const nextSlide = useCallback(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    if (!inView) {
      slideImgRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [current, length]);

  // prev slide
  const prevSlide = useCallback(() => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    if (!inView) {
      slideImgRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [current, length]);

  // change slide on touch/swipe
  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      nextSlide();
    }

    if (touchStart - touchEnd < -100) {
      prevSlide();
    }
  };

  // change slide on arrow buttons click
  const keyPress = useCallback(
    (event: KeyboardEvent): void => {
      if (event.key === 'ArrowRight' && showModal) {
        nextSlide();
      }
      if (event.key === 'ArrowLeft' && showModal) {
        prevSlide();
      }
    },
    [nextSlide, prevSlide, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () =>
      document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <SliderContainer
      ref={slideRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <FaChevronLeft
        className='left-arrow'
        onClick={prevSlide}
      />
      <FaChevronRight
        className='right-arrow'
        onClick={nextSlide}
      />
      {slides.map((slide, index) => {
        return (
          <div
            ref={slideImgRef}
            className={
              index === current ? 'slide active' : 'slide'
            }
            key={index}
          >
            {index === current && slide?.attributes?.url && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                ref={ref}
                src={slide?.attributes?.url}
                alt='image'
                className='image'
              />
            )}
          </div>
        );
      })}
    </SliderContainer>
  );
};

export default Slider;
