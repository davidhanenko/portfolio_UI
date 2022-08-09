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
    transform: translate(300%);
  }
   100% {
     opacity: 1;
     transform: translate(0%);
  }
`;

const fadeInL = keyframes`
  0% {
    opacity: 0;
    transform: translate(-300%);
  }
   100% {
     opacity: 1;
     transform: translate(0%);
  }
`;

const DescriptionStyles = styled.section<IProjectProps>`
  position: absolute;

  width: 60%;
  height: 60%;

  background: var(--lightGray);

  padding: 2rem;
  opacity: 0;

  cursor: default;

  .project-type {
    display: flex;
    justify-content: end;
    padding-bottom: 1rem;
    font-size: 1.7rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  .project-description {
    font-size: 1.5rem;
    text-indent: 2rem;
    line-height: 1.3;

    @media (max-width: 992px) {
      font-size: 1.2rem;
    }
  }

  ul {
    width: 100%;
    padding: 2rem;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    position: absolute;
    bottom: 0;
  }

  li {
    list-style-type: '▶';
    padding-inline-start: 0.4rem;
    font-size: 1.6rem;
    text-transform: capitalize;
    font-weight: 600;
    user-select: none;
    cursor: default;

    &::marker {
      color: var(--lightOrange);
    }

    @media (max-width: 992px) {
      font-size: 1.2rem;
    }
  }
`;

const LinksStyles = styled.div`
  position: absolute;
  bottom: 0;
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
      transition: all 0.2s;
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

const ProjectStyles = styled.div<IProjectProps>`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 20rem;

  user-select: none;

  .project-title {
    position: absolute;
    top: -2rem;

    color: var(--orange);
    font-size: 2.8rem;
  }

  .project {
    position: relative;
    object-fit: contain;
    height: 500px;
    width: 750px;
    max-width: 70vw;
    cursor: pointer;

    transform: translateY(10%);
    opacity: 0;

    animation: ${(props: IProjectProps) =>
        props.inView && fadeIn}
      0.7s;
    animation-fill-mode: forwards;
  }

  &:nth-of-type(2n + 1) {
    .project {
      margin-left: -20rem;
    }

    .project-title {
      right: 20%;
    }

    ${LinksStyles} {
      right: -25%;
    }

    ${DescriptionStyles} {
      top: 25%;
      right: -30%;
      transform: translate(300%);
      animation: ${(props: IProjectProps) =>
          props.inView && fadeInR}
        0.6s;
      animation-fill-mode: forwards;
      animation-delay: 0.4s;
    }
  }

  &:nth-of-type(2n) {
    .project {
      margin-left: 20rem;
    }

    .project-title {
      left: 20%;
    }

    ${LinksStyles} {
      left: -25%;
    }

    ${DescriptionStyles} {
      top: 25%;
      left: -30%;
      transform: translate(-300%);
      animation: ${props => props.inView && fadeInL} 0.6s;
      animation-fill-mode: forwards;
      animation-delay: 0.4s;
    }
  }
`;

export { ProjectStyles, LinksStyles, DescriptionStyles };
