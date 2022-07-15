import styled from 'styled-components';

const SliderContainer = styled.section`
  z-index: 11;
  position: relative;
  top: 50%;

  .image {
    max-width: 800px;
    height: 600px;
    width: 100%;
    height: 100%;
    position: relative;
    /* overflow-y: visible; */
  }

  .right-arrow,
  .left-arrow {
    box-sizing: content-box;
    padding: 0.6rem;
    position: fixed;
    top: 35%;
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
    right: -15%;
  }

  .left-arrow {
    left: -15%;
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
