import styled, { keyframes } from 'styled-components';

interface IProjectProps {
  readonly inView: boolean;
  readonly isSlide?: boolean;
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10%);
  }
   100% {
     opacity: 1;
     transform: translate(0%);
  }
`;

const fadeInR = keyframes`
  0% {
    opacity: 0;
    transform: translate(20%);
  }
   100% {
     opacity: 1;
     transform: translate(0%);
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

const Description = styled.div<IProjectProps>`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  padding: 4rem;

  &:after {
    content: '';
    background: var(--dark);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.7;
  }

  .description-wrapper {
    position: relative;
    color: #ffffff;
    letter-spacing: 0.05rem;
    z-index: 2;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .project-type {
      display: flex;
      justify-content: end;
      margin-bottom: 3rem;
      font-size: 1.6rem;
      font-weight: 400;
      text-transform: uppercase;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -1rem;
        width: 55%;
        height: 1px;
        background-color: var(--orange);
      }
    }

    .project-description {
      font-size: 1.5rem;
      text-align: justify;
      line-height: 1.3;
      font-weight: 300;
      overflow-y: scroll;
    }

    ul {
      width: 100%;
      position: relative;

      @media (max-width: 850px) {
        padding: 0;
      }

      &::before {
        content: '';
        position: absolute;
        top: -1rem;
        width: 55%;
        height: 1px;
        background-color: var(--orange);
      }
    }

    li {
      list-style: none;
      cursor: default;

      display: inline-block;
      font-size: 1.5rem;
      font-weight: 400;
      letter-spacing: 0.11rem;

      &::after {
        content: '|';
        padding: 0 0.75rem;
        color: var(--lightOrange);
      }

      &:last-of-type {
        &::after {
          content: '';
        }
      }

      @media (max-width: 281px) {
        font-size: 0.8rem;
      }
    }
  }
`;

const ProjectHeader = styled.div<IProjectProps>`
  transform: translateY(10%);
  order: 2;

  opacity: 0;
  animation: ${(props: IProjectProps) =>
      props.inView && fadeIn}
    1s;
  animation-fill-mode: forwards;
  animation-delay: 0.3s;

  align-self: center;

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .project-title {
    color: var(--white);
    font-size: 3rem;
    font-weight: 600;

    &::first-letter {
      text-transform: uppercase;
    }

    @media (max-width: 281px) {
      font-size: 2.2rem;
    }
  }

  .project-links {
    display: flex;
    align-items: end;
  }

  .view-more-btn {
    color: var(--white);
    font-size: 2rem;
    border: 1px solid var(--white);
    padding: 0.5rem 1rem;
    margin-right: 5rem;
    transition: all 0.25s;

    &:hover {
      color: var(--lightOrange);
      border: 1px solid var(--lightOrange);
    }
  }

  .outer-links {
    a {
      font-size: 2.2rem;
      color: var(--white);
      padding: 1rem;

      position: relative;

      svg {
        transition: all 0.25s;
      }

      &:after {
        content: attr(data-tooltip);
        position: absolute;
        bottom: -4rem;
        right: 1rem;
        padding: 0.5rem 1rem;
        font-size: 1.3rem;
        color: var(--white);
        background: var(--gray);
        width: 5rem;
        text-align: center;

        display: none;
        transition: all 0.25s;
      }

      @media (hover: hover) {
        &:hover svg {
          transform: scale(1.3);
        }

        &:hover::after {
          display: block;
        }

        &:active svg {
          color: var(--orange);
          transform: scale(1.3);
        }
      }
    }
  }
`;

const ProjectContainer = styled.section<IProjectProps>`
  margin: 15rem auto;
  padding: 0 5rem;

  @media (max-width: 700px) {
  }

  .project-wrapper {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 5rem;

    @media (max-width: 700px) {
    }

    .project-body {
      display: flex;
      justify-content: end;

      transform: translateY(10%);
      opacity: 0;

      animation: ${(props: IProjectProps) =>
          props.inView && fadeIn}
        1s;
      animation-fill-mode: forwards;
      animation-delay: 0.3s;

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
      }
    }
  }

  &:nth-of-type(odd) {
    ${Description} {
      right: 0;
      transform: translate(20%);
      animation: ${(props: IProjectProps) =>
          props.inView && fadeInR}
        1s;
      animation-fill-mode: forwards;
      animation-delay: 0.5s;
    }
  }

  &:nth-of-type(even) {
    ${Description} {
      animation: ${(props: IProjectProps) =>
          props.inView && fadeInL}
        1s;
      animation-fill-mode: forwards;
      animation-delay: 0.5s;
    }
  }
`;

export { ProjectContainer, ProjectHeader, Description };
