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
    opacity: 0.97;
  }
`;

const HeaderStyles = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;

  user-select: none;

  height: var(--headerHeight);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem 1rem 1rem;

  transition: all 0.5s;

  opacity: 0;
  ${props => props.displayHeader && `opacity: 1;`};

  /* header appear animation */
  animation: ${(props: HeaderProps) =>
    props.nameAnimationEnd &&
    !props.displayHeader &&
    animate};

  animation-duration: 0.5s;
  animation-delay: 0.4s;
  animation-fill-mode: forwards;

  ${(props: HeaderProps) =>
    props.isScroll &&
    `backdrop-filter: blur(10px); background-color: rgba(0, 0, 0, 0.25);`};

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transform: scale(0.1, 1);
    border-bottom: 0.5px solid var(--orange);

    transition: all 0.6s;

    ${(props: HeaderProps) =>
      props.isScroll &&
      `opacity: 1;
      transform: scale(1, 1);`};
  }
`;

export { HeaderStyles };
