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

const DescriptionStyles = styled.section<IProjectProps>`
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
    padding-bottom: 1rem;
    font-size: 1.7rem;
    font-weight: 400;
    text-transform: uppercase;
  }

  .project-description {
    font-size: 1.5rem;
    text-indent: 2rem;
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
    list-style-type: '🛠️';
    padding-inline-start: 0.4rem;
    padding: 0.3rem;
    font-size: 1.5rem;
    text-transform: capitalize;
    font-weight: 400;
    user-select: none;
    cursor: default;

    @media (max-width: 992px) {
      font-size: 1.2rem;
    }
  }
`;

const LinksStyles = styled.section`
  position: absolute;
  bottom: -3rem;
  a {
    font-size: 2rem;
    color: var(--white);
    padding: 1rem;
    transition: all 0.25s;

    position: relative;

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

    &:hover svg {
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
  left: 2rem;
  z-index: 2;
  font-size: 3rem;
  text-transform: uppercase;
  /* color: var(--orange); */
  color: var(--dark);
  opacity: 0;
  transform: translateY(6rem);

  transition: all 0.35s;
`;

const ProjectContainer = styled.article<IProjectProps>`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 35rem;

  user-select: none;

  @media (max-width: 568px) {
    margin-bottom: 40rem;
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
      0.5s;
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
      &:hover {
        /* filter: grayscale(65%); */
        /* filter: blur(2px); */
        ${ImageOverlayText} {
          line-height: 1.3;
          transform: translateY(0rem);
          opacity: 1;
        }
      }
    }
  }

  &:nth-of-type(2n + 1) {
    &::before {
      content: '';

      position: absolute;
      top: -8rem;
      right: 5rem;
      height: 1px;
      width: 40%;
      background-color: var(--white);
    }

    &::after {
      content: '';

      position: absolute;
      bottom: -8rem;
      right: 5rem;
      height: 1px;
      width: 40%;
      background-color: var(--white);
    }

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
    }
  }

  .project-title {
    right: 20%;

    @media (max-width: 568px) {
      right: auto;
      top: -5rem;
    }
  }

  ${LinksStyles} {
    right: -25%;

    @media (max-width: 768px) {
      right: auto;
      left: 10%;
      bottom: -5%;
    }

    @media (max-width: 576px) {
      right: auto;
      left: 0;
      top: 3%;
    }
  }

  ${DescriptionStyles} {
    top: 25%;
    right: -30%;
    transform: translate(20%);
    animation: ${(props: IProjectProps) =>
        props.inView && fadeInR}
      0.7s;
    animation-fill-mode: forwards;
    animation-delay: 0.5s;

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
    &::before {
      content: '';

      position: absolute;
      top: -8rem;
      left: 5rem;
      height: 1px;
      width: 40%;
      background-color: var(--white);
    }

    &::after {
      content: '';

      position: absolute;
      bottom: -8rem;
      left: 5rem;
      height: 1px;
      width: 40%;
      background-color: var(--white);
    }

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
    }

    .project-title {
      left: 20%;
      @media (max-width: 568px) {
        left: auto;
        top: -5rem;
      }
    }

    ${LinksStyles} {
      left: -25%;

      @media (max-width: 768px) {
        left: auto;
        right: 10%;
        bottom: -5%;
      }

      @media (max-width: 576px) {
        left: auto;
        right: 0;
        top: 3%;
      }
    }

    ${DescriptionStyles} {
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
  LinksStyles,
  DescriptionStyles,
  ImageOverlayText,
};
