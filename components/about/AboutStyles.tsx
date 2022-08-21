import styled, { keyframes } from 'styled-components';

interface IAboutProps {
  readonly nameAnimationDuration?: number | string;
}

const AboutContainer = styled.main<IAboutProps>`
  scroll-snap-align: start;
  min-height: 100vh;

  background: var(--dark2);
  padding-bottom: 20rem;

  @media (max-width: 768px) {
    /* padding-left: 1rem; */
    padding-right: 1rem;
  }
`;

const AboutWrapper = styled.div`
  max-width: var(--maxWidth);
  width: 70vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 5rem;

  padding-top: calc(var(--headerHeight) + 10rem);

  .img-cv {
    position: relative;
  }

  @media (max-width: 992px) {
    width: 90vw;
  }

  @media (max-width: 768px) {
    width: 100vw;
    display: block;
    font-size: 1rem;
    padding: calc(var(--headerHeight) + 10rem) 5rem 0 5rem;
  }

  @media (max-width: 576px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export { AboutContainer, AboutWrapper };
