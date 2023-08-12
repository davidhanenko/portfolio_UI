import styled, { keyframes } from 'styled-components';

import {
  ProjectDescriptionStyles,
  ProjectHeaderStyles,
} from '../project/ProjectStyles';

interface ICurrentProjectProps {
  readonly inView: boolean;
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
   100% {
     opacity: 1;
  }
`;

const fadeInR = keyframes`
  0% {
    opacity: 0;
    transform: translateX(20%);
  }
   100% {
     opacity: 1;
     transform: translateX(0%);
  }
`;

const CurrentProjectStyles = styled.div<ICurrentProjectProps>`
  margin: 15rem auto;

  .project-wrapper {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 5rem;
    padding: 0 5rem;

    @media (max-width: 1024px) {
      display: flex;
      flex-direction: column;
    }

    @media (max-width: 700px) {
      gap: 3rem;
      padding: 0 1rem;
    }

    .header-wrapper {
      display: flex;
      justify-content: center;

      @media (min-width: 1024px) {
        justify-content: end;
      }
    }

    .project-body {
      order: 2;
      display: flex;
      opacity: 0;
      animation: ${(props: ICurrentProjectProps) =>
          props.inView && fadeIn}
        1s;
      animation-fill-mode: forwards;

      @media (max-width: 1024px) {
        justify-content: center;
      }

      .project-img {
        position: relative;
        width: 600px;
        height: calc((600px / 16) * 9);

        span {
          img {
            object-fit: cover;
            @media (max-width: 700px) {
              object-fit: contain;
            }
          }
        }

        @media (max-width: 700px) {
          span {
            img {
              object-fit: contain;
            }
          }
        }
      }
    }
  }

  /* adjust project header styles for current project */
  ${ProjectHeaderStyles} {
    order: 1;

    transform: translateX(20%);
    opacity: 0;
    animation: ${(props: ICurrentProjectProps) =>
        props.inView && fadeInR}
      1s;
    animation-fill-mode: forwards;
  }

  ${ProjectDescriptionStyles} {
    opacity: 0;
    transform: translateX(20%);
    animation: ${(props: ICurrentProjectProps) =>
        props.inView && fadeInR}
      1s;
    animation-fill-mode: forwards;
    animation-delay: 0.5s;
  }
`;

export { CurrentProjectStyles };
