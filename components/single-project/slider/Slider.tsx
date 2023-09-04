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

import {
  ImagePlaceholderStyles,
  SliderContainer,
} from './SliderStyles';

import { IMAGE_PLACEHOLDER as placeholderImg } from '../../../config';
import ScrollAnimated from '../../shared/ScrollAnimated';

 interface ISlidesProps {
  slides: {
      url: string;
      height: number;
  }[];
}

const Slider: React.FC<ISlidesProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [isOversized, setOversized] = useState(false);

  const slideImgRef = useRef(
    null
  ) as RefObject<HTMLImageElement>;

  const length = slides.length;

  useEffect(() => {
    if (slides[current].height > 1400) {
      setOversized(true);
    } else {
      setOversized(false);
    }
  }, [current, slides]);

  // next slide
  const nextSlide = useCallback(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, [current, length]);

  // prev slide
  const prevSlide = useCallback(() => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }, [current, length]);

  // change slide on arrow buttons click
  const keyPress = useCallback(
    (event: KeyboardEvent): void => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      }
      if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    },
    [nextSlide, prevSlide]
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
    <SliderContainer>
      <div className='slider-controls'>
        <div className='slider-controls-inner'>
          <FaChevronLeft
            className='left-arrow'
            onClick={prevSlide}
          />
          {isOversized && (
            <div className='oversized-image-scroll'>
              <ScrollAnimated />
            </div>
          )}
          <FaChevronRight
            className='right-arrow'
            onClick={nextSlide}
          />
        </div>
      </div>
      {slides.map((slide, index) => {
        if (!slide)
          return (
            <ImagePlaceholderStyles
              placeholderImg={placeholderImg}
              key={index}
            />
          );
        return (
          <div
            className={
              index === current ? 'slide active' : 'slide'
            }
            key={index}
          >
            {index === current &&
              !!slide?.url && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  ref={slideImgRef}
                  src={slide?.url}
                  alt={`Project screenshot`}
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
