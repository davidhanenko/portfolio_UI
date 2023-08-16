import styled, { keyframes } from 'styled-components';

import {
  ProjectDescriptionStyles,
  ProjectHeaderStyles,
  fadeIn,
} from '../project/ProjectStyles';

const bgMove = keyframes`
    from { background-position: 0 0; }
    to { background-position: -400% 0; }
`;

interface ICurrentProjectProps {
  readonly inView: boolean;
  readonly progress: number;
}

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
  padding: 8rem 0;
  background-color: var(--dark4);
  position: relative;

  .top-line {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.5rem;
    font-weight: 100;
    padding: 1rem 2rem;

    color: transparent;
    background: var(--gradient-text3);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200%;
    animation: ${bgMove} 4s alternate infinite;
  }

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
          font-size: 1.6rem;
          &:first-of-type {
            color: var(--white);
          }

          &:nth-of-type(2) {
            margin-left: 1rem;
            color: var(--teal);
          }

          &:last-of-type {
            font-size: 3rem;
            margin-left: 0.5rem;

            color: transparent;
            background: var(--gradient-text3);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-size: 200%;
            animation: ${bgMove} 4s alternate infinite;
          }
        }
      }

      .project-progress {
        width: 100%;
        height: 1.75rem;
        background-color: var(--lightGray);
        border-radius: 1rem;
        margin-top: 3rem;

        position: relative;

        @media (max-width: 1024px) {
          max-width: 400px;
        }

        .progress-bar {
          width: ${(props: ICurrentProjectProps) =>
            props.progress}%;
          height: 100%;
          border-radius: ${(props: ICurrentProjectProps) =>
            props?.progress > 97
              ? '1rem'
              : '1rem 0 0 1rem'};

          color: transparent;
          background: var(--gradient-text3);
          background-clip: text;
          -webkit-background-clip: border-box;
          -webkit-text-fill-color: transparent;
          background-size: 400%;
          animation: ${bgMove} 8s linear infinite;
        }

        .progress {
          color: var(--white);
          font-size: 4rem;
          font-weight: 700;

          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
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
