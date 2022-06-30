import Image from 'next/image';
import React, { useState } from 'react';

import {
  FaChevronRight,
  FaChevronLeft,
} from 'react-icons/fa';
import { SliderContainer } from './SliderStyles';

interface ISlidesProps {
  slides: object[];
}

const Slider: React.FC<ISlidesProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const length = slides.length;

  const nextSlide = () => {
    setCurrent(
      current === length - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };


  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <SliderContainer>
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
              <img
                src={slide?.attributes?.url}
                alt='image'
                className='image'
                // width={700}
                // height={500}
                // layout='fill'
                // objectFit='contain'
              />
            )}
          </div>
        );
      })}
    </SliderContainer>
  );
};

export default Slider;
