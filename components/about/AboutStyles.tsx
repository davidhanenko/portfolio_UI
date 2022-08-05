import styled, { keyframes } from 'styled-components';

interface IAboutProps {
  readonly nameAnimationDuration?: number | string;
}

const AboutContainer = styled.main<IAboutProps>`
  scroll-snap-align: start;
  min-height: 100vh;

  background: var(--dark2);

  padding-left: 10rem;
  padding-right: 10rem;

  padding-bottom: 20rem;

  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const AboutWrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 3rem;

  padding-top: calc(var(--headerHeight) + 10rem);

  @media (max-width: 768px) {
    display: block;
    font-size: 0.8rem;
    padding-top: var(--headerHeight);
  }
`;

export { AboutContainer, AboutWrapper };
