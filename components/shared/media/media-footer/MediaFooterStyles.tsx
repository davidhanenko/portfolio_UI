import styled, { keyframes } from 'styled-components';
import { MediaStyles } from '../MediaStyles';

const fadeIn = keyframes`
 0% {
    transform: translateX(-200%);
  }
 100% {
    transform: translateX(0%);
  }
`;

const MediaFooterStyles = styled.footer`
  position: absolute;
  bottom: 4rem;
  left: 4rem;

  transform: translateX(-200%);

  animation: ${fadeIn};
  animation-duration: 0.5s;
  animation-delay: 0.8s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(
    0.17,
    0.48,
    0.45,
    1.15
  );

  ${MediaStyles} {
    display: flex;
    flex-direction: row;

    &::after {
      content: '';
      width: 135%;
      height: 1px;
      background: var(--white);
      position: absolute;
      left: 0;
      bottom: 0;
    }

    a {
      &::after {
        right: -3rem;
        top: -3rem;
      }
    }

    svg {
      margin: 0.75rem 0.75rem;
      @media (hover: hover) {
        &:hover {
          transform: translateY(-0.5rem);
        }
      }
    }
  }
`;

export { MediaFooterStyles };
