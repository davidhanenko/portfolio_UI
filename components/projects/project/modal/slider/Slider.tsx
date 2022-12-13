import {
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

import {
  ImagePlaceholderStyles,
  SliderContainer,
} from './SliderStyles';

import { IMAGE_PLACEHOLDER as placeholderImg } from '../../../../../config';

interface ISlidesProps {
  slides: any;
  slideRef: RefObject<HTMLDivElement>;
  showModal: boolean;
  projectTitle: string;
}

const Slider: React.FC<ISlidesProps> = ({
  showModal,
  slides,
  slideRef,
  projectTitle,
}) => {
  const [current, setCurrent] = useState(0);

  const slideImgRef = useRef<HTMLDivElement>(null);

  const { ref, inView } = useInView({
    threshold: 1,
  });

  const length = slides.length;

  // next slide
  const nextSlide = useCallback(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, [current, length]);

  // prev slide
  const prevSlide = useCallback(() => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }, [current, length]);

  useEffect(() => {
    if (!inView) {
      slideImgRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [current, inView]);

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
    <SliderContainer ref={slideRef}>
      <FaChevronLeft
        className='left-arrow'
        onClick={prevSlide}
      />
      <FaChevronRight
        className='right-arrow'
        onClick={nextSlide}
      />
      {slides.map((slide, index) => {
        if (!slide)
          return (
            <ImagePlaceholderStyles
              placeholderImg={placeholderImg}
            />
          );
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
                alt={`${projectTitle} - screenshot`}
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
