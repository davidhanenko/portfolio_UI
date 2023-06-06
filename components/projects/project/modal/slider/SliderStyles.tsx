import styled from 'styled-components';

interface ImagePlaceholderProps {
  readonly placeholderImg: string;
}

const SliderContainer = styled.section`
  overflow-y: scroll;
  height: 100%;

  .slide {
    opacity: 0;
    margin: 0 auto;
    transition: all 0.4s;
  }

  .slide.active {
    @media (hover: hover) {
      opacity: 1;
      transform: scale(1.08);
    }

    @media (hover: none) and (pointer: coarse) and (max-width: 600px) {
      opacity: 1;
    }
  }

  .image {
    max-width: 900px;
    width: 100%;
    height: 100%;

    @media (max-with: 600px) {
      max-width: 550px;
    }
  }

  .slider-controls {
    position: absolute;
    top: -50px;
    z-index: 5;
    display: flex;
    justify-content: space-between;
    width: 150px;
    
  }

  .right-arrow,
  .left-arrow {
    box-sizing: content-box;
    padding: 0.6rem;
    color: var(--white);
    font-size: 3rem;
    cursor: pointer;
    transition: opacity 0.2s;

    @media (hover: hover) {
      &:hover {
        opacity: 0.6;
      }
    }
  }

  @media (hover: hover) {
    .right-arrow,
    .left-arrow {
      &:hover {
        opacity: 0.6;
      }
    }
  }

  .right-arrow {
    /* right: 1rem; */
  }

  .left-arrow {
    /* left: 0; */
  }

  @media (hover: none) and (pointer: coarse) and (max-width: 600px) {
    .slider-controls {
      position: relative;
    }

    .right-arrow {
      position: absolute;
      font-size: 4rem;
      padding: 1rem;
      right: 2rem;
      background: var(--offWhite);
      color: var(--lightGray);
      border-radius: 50%;
      opacity: 0.5;
    }

    .left-arrow {
      position: absolute;
      font-size: 4rem;
      padding: 1rem;
      left: 2rem;
      background: var(--offWhite);
      color: var(--lightGray);
      border-radius: 50%;
      opacity: 0.5;
    }
  }
`;

const ImagePlaceholderStyles = styled.div<ImagePlaceholderProps>`
  margin: 0 auto;
  width: 100%;
  max-width: 700px;
  height: 400px;
  background: ${props => `url(${props.placeholderImg})`}
    no-repeat center var(--lightGray);
`;

export { SliderContainer, ImagePlaceholderStyles };
