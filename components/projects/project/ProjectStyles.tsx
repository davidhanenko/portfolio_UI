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
  50% {
    filter: blur(0.1rem);
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
   50% {
    filter: blur(0.1rem);
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
   50% {
    filter: blur(0.1rem);
  }
   100% {
     opacity: 1;
     transform: translate(0%);
  }
`;

const Description = styled.section<IProjectProps>`
  position: absolute;

  width: 70%;
  border-radius: 0.5rem;

  color: var(--white);
  background: var(--dark2);
  background: var(--gradient-gray1);
  box-shadow: 0 10px 15px -3px var(--bgDarkOpacity);

  padding: 2rem;
  opacity: 0;
  letter-spacing: 0.05rem;

  cursor: default;

  .project-type {
    display: flex;
    justify-content: end;
    margin-bottom: 3rem;
    font-size: 1.6rem;
    font-weight: 300;
    text-transform: uppercase;
    position: relative;

    &::after {
      position: absolute;
      bottom: -1rem;
      content: '';
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
  }

  ul {
    width: 100%;
    padding: 2rem 0;

    @media (max-width: 850px) {
      padding: 0;
    }
  }

  li {
    list-style: none;
    user-select: none;
    cursor: default;

    display: inline-block;
    font-size: 1.5rem;
    font-weight: 200;
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
`;

const Links = styled.section`
  position: absolute;
  bottom: -6rem;
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
    &:hover svg {
      transform: scale(1.3);
    }
    @media (hover: hover) {
      &:hover::after {
        display: block;
      }
    }

    &:active svg {
      color: var(--orange);
      transform: scale(1.3);
    }
  }
`;

const ImageOverlayText = styled.p`
  position: absolute;
  top: 60%;
  z-index: 2;
  font-size: 3.5rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--dark2);
  background: #ffffffc7;
  box-shadow: 0 10px 15px -3px var(--bgDarkOpacity);
  padding: 1.5rem;

  opacity: 0;
  transform: translateY(6rem);

  @media (hover: none) and (pointer: coarse) {
    font-size: 2.5rem;
    transform: translateY(-2rem);
    opacity: 1;
  }
  transition: all 0.3s;
`;

const ProjectContainer = styled.section<IProjectProps>`
  background: var(--gradient-gray2);
  padding: 12rem 0;
  margin: 8rem auto;
  box-shadow: 0 -2px 25px -8px var(--dark);
  width: 94%;
  border-radius: 1rem;

  @media (max-width: 700px) {
    padding: 15rem 0;
    width: 100%;
  }

  .project-wrapper {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;

    user-select: none;

    @media (max-width: 700px) {
      margin-bottom: 25rem;
      padding: 0 1rem;
    }

    .project-title {
      position: absolute;
      top: -5rem;

      color: var(--white);
      font-size: 3.3rem;
      font-weight: 600;

      transform: translateY(10%);
      opacity: 0;

      animation: ${(props: IProjectProps) =>
          props.inView && fadeIn}
        0.75s;
      animation-fill-mode: forwards;

      &::first-letter {
        text-transform: uppercase;
      }

      @media (max-width: 281px) {
        font-size: 2.2rem;
      }
    }

    .project-body {
      position: relative;
      max-width: 70vw;

      ${(props: IProjectProps) =>
        props.isSlide && `cursor: pointer;`};

      transform: translateY(10%);
      opacity: 0;

      animation: ${(props: IProjectProps) =>
          props.inView && fadeIn}
        0.6s;
      animation-fill-mode: forwards;
      animation-delay: 0.3s;

      .project-img {
        transition: all 0.3s;
        position: relative;

        @media (hover: hover) {
          &:hover {
            ${ImageOverlayText} {
              transform: translateY(0rem);
              opacity: 1;

              ${(props: IProjectProps) =>
                !props.isSlide && `display: none;`};
            }
          }
        }
        @media (hover: none) and (pointer: coarse) {
          ${ImageOverlayText} {
            ${(props: IProjectProps) =>
              !props.isSlide && `display: none;`};
          }
        }
      }
    }
  }

  &:nth-of-type(odd) {
    .project-body {
      margin-left: -20rem;

      ${ImageOverlayText} {
        left: 3rem;
      }
    }

    .project-title {
      right: 20%;
    }

    @media (max-width: 950px) {
      .project-img {
        margin-left: 4rem;
      }
    }
    @media (max-width: 700px) {
      &::before,
      &::after {
        content: none;
      }

      .project-body {
        margin-left: 0;
        max-width: 95vw;
      }

      .project-title {
        right: auto;
        top: -10rem;
      }
      .project-img {
        margin-left: 0;
      }
    }

    ${Links} {
      right: -25%;

      @media (max-width: 950px) {
        right: auto;
        left: 10%;
        bottom: -5rem;
      }

      @media (max-width: 700px) {
        right: auto;
        left: 0;
        top: -3rem;
      }
    }

    ${Description} {
      top: 25%;
      right: -30%;
      transform: translate(20%);
      animation: ${(props: IProjectProps) =>
          props.inView && fadeInR}
        0.7s;
      animation-fill-mode: forwards;
      animation-delay: 0.5s;

      .hr-project-description {
        height: 1px;
        background-color: var(--orange);
        margin: 2rem 0;
        width: 55%;
        border: none;
      }

      @media (max-width: 850px) {
        width: 90%;
      }

      @media (max-width: 700px) {
        top: 100%;
        right: 0;
        width: 100%;
      }
    }
  }

  &:nth-of-type(even) {
    .project-body {
      margin-left: 20rem;

      ${ImageOverlayText} {
        right: 3rem;
      }
    }

    .project-title {
      left: 20%;
    }

    @media (max-width: 950px) {
      .project-img {
        margin-right: 4rem;
      }
    }
    @media (max-width: 700px) {
      &::before,
      &::after {
        content: none;
      }

      .project-body {
        margin-left: 0;
        max-width: 95vw;
      }

      .project-title {
        left: auto;
        top: -10rem;
      }
      .project-img {
        margin-right: 0;
      }
    }

    ${Links} {
      left: -25%;

      @media (max-width: 950px) {
        left: auto;
        right: 10%;
        bottom: -5rem;
      }

      @media (max-width: 700px) {
        left: auto;
        right: 0;
        top: -3rem;
      }
    }

    ${Description} {
      top: 25%;
      left: -30%;
      transform: translate(-20%);
      animation: ${props => props.inView && fadeInL} 0.6s;
      animation-fill-mode: forwards;
      animation-delay: 0.5s;

      .hr-project-description {
        height: 1px;
        background-color: var(--orange);
        margin: 2rem 0;
        width: 55%;
        border: none;
      }

      @media (max-width: 850px) {
        width: 90%;
      }

      @media (max-width: 700px) {
        top: 100%;
        left: 0;
        width: 100%;
      }
    }
  }
`;

export {
  ProjectContainer,
  Links,
  Description,
  ImageOverlayText,
};
