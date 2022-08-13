import React, {
  RefObject,
  useCallback,
  useEffect,
  useState,
} from 'react';

import {
  FaChevronRight,
  FaChevronLeft,
} from 'react-icons/fa';
import { SliderContainer } from './SliderStyles';

interface ISlidesProps {
  slides: any;
  slideRef: RefObject<HTMLDivElement>;
  showModal: boolean;
}

const Slider: React.FC<ISlidesProps> = ({
  showModal,
  slides,
  slideRef,
}) => {
  const [current, setCurrent] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const length = slides.length;

  // next slide
  const nextSlide = useCallback(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, [current, length]);

  // prev slide
  const prevSlide = useCallback(() => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }, [current, length]);

  // change slide on touch/swipe
  const handleTouchStart = e => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = e => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 10) {
      nextSlide();
    }

    if (diff < -10) {
      prevSlide();
    }

    setTouchPosition(null);
  };

  // change slide on arrow btn click
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
            className={
              index === current ? 'slide active' : 'slide'
            }
            key={index}
          >
            {index === current && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
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
