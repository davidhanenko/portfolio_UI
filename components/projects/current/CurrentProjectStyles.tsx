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
      order: 1;

      padding: 3rem 0;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @media (min-width: 1024px) {
        justify-content: end;
        margin-left: auto;
      }

      .project-status {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;

        margin-top: 6rem;

        p {
          display: inline-block;
          font-size: 16px;
          color: var(--teal1);
        }
      }

      .project-progress {
        width: 100%;
        height: 1rem;
        background-color: var(--white);
        border-radius: 0.5rem;
        margin-top: 3rem;

        @media (max-width: 1024px) {
          max-width: 400px;
        }

        .progress-bar {
          width: 75%;
          height: 100%;
          background-color: var(--teal1);
          border-radius: 0.5rem;
        }
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
    order: -1;

    justify-content: start; // override justify-content: space-around; from ProjectHeaderStyles

    transform: translateX(20%);
    opacity: 0;
    animation: ${(props: ICurrentProjectProps) =>
        props.inView && fadeInR}
      1s;
    animation-fill-mode: forwards;

    .project-title {
      margin-bottom: 4rem;
    }

    @media (min-width: 1024px) {
      align-self: end;
    }
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
