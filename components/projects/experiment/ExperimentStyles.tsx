import styled from 'styled-components';

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f47d28e9;
  z-index: 2;

  padding: 0 2rem;
  display: flex;
  align-items: center;

  transform: translateY(-100%);
  transition: all 0.4s;

  p {
    color: black;
    font-size: 1.5rem;
    text-align: justify;
    line-height: 1.6rem;
    font-weight: 300;
  }
`;

const Title = styled.h4`
  font-size: 2.2rem;
  position: absolute;
  bottom: 1%;
  left: 0;
  color: var(--dark);

  padding: 1rem 0 1rem 2rem;

  background: #ffffff9e;
  width: 100%;

  transition: all 0.6s;

  &::first-letter {
    text-transform: uppercase;
  }
`;

const ExperimentContainer = styled.div`
  display: flex;
  justify-content: center;

  &:hover {
    ${Overlay} {
      transform: translateY(0);
    }
    ${Title} {
      transform: translateY(100%);
    }
  }

  .image-wrapper {
    position: relative;
    overflow: hidden;
  }
`;

export { ExperimentContainer, Overlay, Title };
