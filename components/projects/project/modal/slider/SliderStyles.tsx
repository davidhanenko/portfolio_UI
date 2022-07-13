import styled from 'styled-components';

const SliderContainer = styled.section`
  height: 100vh;
  z-index: 11;
  position: relative;
  top: 50%;

  .image {
    max-width: 800px;
    height: 600px;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .right-arrow {
    position: absolute;
    top: 25%;
    right: -15%;
    font-size: 3rem;
    color: var(--white);
    z-index: 10;
    user-select: none;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.6;
    }
  }

  .left-arrow {
    position: absolute;
    top: 25%;
    left: -15%;
    font-size: 3rem;
    color: var(--white);
    z-index: 10;
    user-select: none;
    cursor: pointer;

    transition: opacity 0.2s;

    &:hover {
      opacity: 0.6;
    }
  }

  .slide {
    opacity: 0;
    transition-duration: 1s ease;
  }

  .slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  }
`;

export { SliderContainer };
