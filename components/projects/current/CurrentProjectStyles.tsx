import styled, { keyframes } from 'styled-components';

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

const fadeInL = keyframes`
  0% {
    opacity: 0;
    transform: translate(-20%);
  }
   100% {
     opacity: 1;
     transform: translate(0%);
  }
`;

const CurrentProjectStyles = styled.div<ICurrentProjectProps>`
  margin: 15rem auto;

  .project-wrapper {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 3fr 2fr;
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

    .project-body {
      display: flex;
      justify-content: end;

      opacity: 0;
      animation: ${(props: ICurrentProjectProps) =>
          props.inView && fadeIn}
        1s;
      animation-fill-mode: forwards;

      @media (max-width: 1024px) {
        order: 2;
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
`;

export { CurrentProjectStyles };
