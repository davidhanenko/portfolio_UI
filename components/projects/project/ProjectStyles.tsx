import styled, { keyframes } from 'styled-components';

interface IProjectProps {
  readonly inView: boolean;
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

  color: var(--white);
  background: var(--dark2);

  padding: 2rem;
  opacity: 0;
  letter-spacing: 0.07rem;

  cursor: default;

  .project-type {
    display: flex;
    justify-content: end;
    margin-bottom: 3rem;
    font-size: 1.7rem;
    font-weight: 400;
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

    @media (max-width: 992px) {
      font-size: 1.2rem;
    }
  }

  ul {
    width: 100%;
    padding: 2rem;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    background: var(--dark2);
  }

  li {
    list-style: none;
    font-size: 1.1rem;
    font-weight: 400;
    user-select: none;
    cursor: default;

    display: flex;
    align-items: center;
  }
`;

const Links = styled.section`
  position: absolute;
  bottom: -6rem;
  a {
    font-size: 2rem;
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
      right: -3rem;
      padding: 0.5rem 1rem;
      font-size: 1.3rem;
      color: var(--white);
      background: var(--gray);
      width: 12rem;

      display: none;
      transition: all 0.25s;
    }
    @media (hover: hover) {
      &:hover svg {
        color: var(--orange);
        transform: scale(1.3);
      }
    }

    &:active svg {
      color: var(--orange);
      transform: scale(1.3);
    }

    &:hover::after {
      display: block;

      /* disable tooltips on touch screens */
      @media (pointer: coarse) {
        display: none;
      }
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
  box-shadow: 5px 5px 15px 5px #8484848e;
  padding: 1.5rem;

  opacity: 0;
  transform: translateY(6rem);

  @media (hover: none) and (pointer: coarse) {
    font-size: 2.5rem;
    transform: translateY(-2rem);
    opacity: 1;
  }

  transition: all 0.35s;
`;

const ProjectContainer = styled.article<IProjectProps>`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 25rem;

  user-select: none;

  @media (max-width: 576px) {
    margin-bottom: 45rem;
  }

  .project-title {
    position: absolute;
    top: -2rem;

    color: var(--orange);
    font-size: 2.8rem;

    transform: translateY(10%);
    opacity: 0;

    animation: ${(props: IProjectProps) =>
        props.inView && fadeIn}
      0.75s;
    animation-fill-mode: forwards;
  }

  .project-body {
    position: relative;
    max-width: 70vw;
    cursor: pointer;

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
          }
        }
      }
    }
  }

  &:nth-of-type(2n + 1) {
    @media (max-width: 576px) {
      &::before,
      &::after {
        content: none;
      }
    }

    .project-body {
      margin-left: -20rem;

      @media (max-width: 576px) {
        margin-left: 0;
        max-width: 95vw;
      }

      ${ImageOverlayText} {
        left: 3rem;
      }
    }
  }

  .project-title {
    right: 20%;

    @media (max-width: 576px) {
      right: auto;
      top: -7rem;
    }
  }

  ${Links} {
    right: -25%;

    @media (max-width: 768px) {
      right: auto;
      left: 10%;
      bottom: -5rem;
    }

    @media (max-width: 576px) {
      right: auto;
      left: 0;
      top: 0;
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

    @media (max-width: 768px) {
      width: 80%;
    }

    @media (max-width: 576px) {
      top: 100%;
      right: 0;
      width: 100%;
    }
  }

  &:nth-of-type(2n) {
    @media (max-width: 576px) {
      &::before,
      &::after {
        content: none;
      }
    }

    .project-body {
      margin-left: 20rem;

      @media (max-width: 576px) {
        margin-left: 0;
        max-width: 95vw;
      }

      ${ImageOverlayText} {
        right: 3rem;
      }
    }

    .project-title {
      left: 20%;
      @media (max-width: 576px) {
        left: auto;
        top: -7rem;
      }
    }

    ${Links} {
      left: -25%;

      @media (max-width: 768px) {
        left: auto;
        right: 10%;
        bottom: -5rem;
      }

      @media (max-width: 576px) {
        left: auto;
        right: 0;
        top: 0;
      }
    }

    ${Description} {
      top: 25%;
      left: -30%;
      transform: translate(-20%);
      animation: ${props => props.inView && fadeInL} 0.6s;
      animation-fill-mode: forwards;
      animation-delay: 0.5s;

      @media (max-width: 768px) {
        width: 80%;
      }

      @media (max-width: 576px) {
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
