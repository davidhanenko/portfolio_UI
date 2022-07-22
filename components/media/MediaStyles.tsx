import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    transform: translateY(200%);
  }
 100% {
    transform: translateY(0%);
  }

`;

const MediaStyles = styled.aside`
  position: absolute;
  bottom: 4rem;
  right: 4rem;
  padding-right: 1rem;

  font-size: 2rem;

  display: flex;
  flex-direction: column;
  transform: translateY(200%);
  animation: ${props => props.inView && fadeIn};
  animation-duration: 1s;
  animation-delay: 1s;

  animation-fill-mode: forwards;

  &::after {
    content: '';
    height: 150%;
    width: 1px;
    background: white;

    position: absolute;
    right: 0;
    bottom: 0;
  }

  svg {
    margin: 0.75rem 0;
    color: var(--orange);
    transition: all 0.25s;

    &:hover {
      color: var(--white);
      cursor: pointer;
    }
  }
`;

export { MediaStyles };
