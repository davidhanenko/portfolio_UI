import styled, { keyframes } from 'styled-components';

type HeaderProps = {
  nameAnimationEnd: boolean;
  displayHeader?: boolean;
  isScroll?: boolean;
};

const animate = keyframes`
  0% {
    top: -2rem;
    opacity: 0;
  }
   100% {
    top: 0rem;
    opacity: 0.8;
  }
`;

const animateBorder = keyframes`
  0% {
    backdrop-filter: none;
    box-shadow: none;
  }
   100% {
     box-shadow: 0px 0.2px 3px 0.3px var(--orange);
    backdrop-filter: saturate(180%) blur(7px);
  }
`;

const HeaderStyles = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;

  height: var(--headerHeight);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem 1rem 1rem;

  opacity: 0;

  /* header appear animation */
  animation: ${(props: HeaderProps) =>
    props.nameAnimationEnd &&
    !props.displayHeader &&
    animate};
  animation-duration: 0.5s;
  animation-delay: 0.4s;
  animation-fill-mode: forwards;

  /* header bottom border/shadow */
  animation: ${(props: HeaderProps) =>
      props.isScroll && animateBorder}
    0.5s forwards;

  /*  display header without animation on every page beside main  */
  ${props => props.displayHeader && `opacity: 1;`};
`;

export { HeaderStyles };
