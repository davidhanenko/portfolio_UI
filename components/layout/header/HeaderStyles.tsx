import styled, { keyframes } from 'styled-components';

type HeaderProps = {
  nameAnimationEnd: boolean;
};

const animate = keyframes`
  0% {
    top: -2rem;
    opacity: 0;
  }
   100% {
    top: 0rem;
    opacity: 1;
  }
`;

const HeaderStyles = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;

  height: var(--headerHeight);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: var(--orange);
  font-size: 7rem;
  opacity: 0;

  animation: ${(props: HeaderProps) =>
    props.nameAnimationEnd && animate};
  animation-duration: 0.5s;
  animation-delay: 0.4s;
  animation-fill-mode: forwards;

  @media (max-width: 768px) {
    background: var(--dark);
  }
`;

export { HeaderStyles };
