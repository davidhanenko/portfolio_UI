import styled, { keyframes } from 'styled-components';

interface IProjectProps {
  readonly inView: boolean;
  readonly isSlide?: boolean;
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

  right: 0;
  transform: translate(20%);
  animation: ${(props: IProjectProps) =>
      props.inView && fadeInL}
    1s;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;

  @media (max-width: 700px) {
    padding: 2rem 1rem;
    border: 1px solid var(--white);
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
      font-size: 1.8rem;
      font-weight: 400;
      position: relative;

      &::first-letter {
        text-transform: uppercase;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: -1.5rem;
        width: 75%;
        height: 1px;
        background-color: var(--orange);
      }
    }

    .project-description {
      font-size: 1.5rem;
      line-height: 1.3;
      font-weight: 300;
      overflow-y: scroll;
    }

    ul {
      width: 100%;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: -1.5rem;
        width: 75%;
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
        color: var(--orange);
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
  transform: translateX(-20%);
  order: 2;

  position: relative;
  z-index: 0;

  opacity: 0;
  animation: ${(props: IProjectProps) =>
      props.inView && fadeInL}
    1s;
  animation-fill-mode: forwards;
  animation-delay: 0.3s;

  align-self: center;

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  font-size: 14px;

  @media (max-width: 1024px) {
    order: 1;
    justify-content: start;

    .project-title {
      margin-bottom: 3rem;
    }
  }

  @media (max-width: 1024px) {
    font-size: 12px;
  }

  .project-title {
    color: var(--white);
    font-size: 2em;
    font-weight: 600;

    &::first-letter {
      text-transform: uppercase;
    }

    @media (max-width: 281px) {
      font-size: 2em;
    }
  }

  .project-links {
    display: flex;
    align-items: end;
  }

  .view-more-btn {
    color: var(--white);
    font-size: 1.5em;
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
      font-size: 1.5em;
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
        font-size: 1.3em;
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
      animation: ${(props: IProjectProps) =>
          props.inView && fadeIn}
        1s;
      animation-fill-mode: forwards;
      animation-delay: 0.3s;

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

export { ProjectContainer, ProjectHeader, Description };
