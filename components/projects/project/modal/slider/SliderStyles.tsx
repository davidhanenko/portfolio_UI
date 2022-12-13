import styled from 'styled-components';

interface ImagePlaceholderProps {
  readonly placeholderImg: string;
}

const SliderContainer = styled.section`
  z-index: 11;
  position: relative;
  top: 50%;

  .slide {
    height: 100%;
  }

  .image {
    max-width: 800px;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .right-arrow,
  .left-arrow {
    box-sizing: content-box;
    padding: 0.6rem;
    position: fixed;
    top: 45%;
    z-index: 10;
    color: var(--white);
    font-size: 3rem;
    user-select: none;
    cursor: pointer;
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.6;
    }
  }

  .right-arrow {
    right: 5%;
  }

  .left-arrow {
    left: 5%;
  }

  @media (hover: none) and (pointer: coarse) {
    .right-arrow {
      right: 2rem;
      background: var(--offWhite);
      color: var(--lightGray);
      border-radius: 50%;
      opacity: 0.5;
    }

    .left-arrow {
      left: 2rem;
      background: var(--offWhite);
      color: var(--lightGray);
      border-radius: 50%;
      opacity: 0.5;
    }
  }

  .slide {
    opacity: 0;
    transition-duration: 0.3s ease;
  }

  .slide.active {
    opacity: 1;
    transition-duration: 0.3s;
    transform: scale(1.08);
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
