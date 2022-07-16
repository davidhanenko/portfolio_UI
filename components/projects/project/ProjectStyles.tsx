import styled, { keyframes } from 'styled-components';

interface IProjectProps {
  readonly inView: boolean;
}

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
  width: 60%;
  height: 60%;

  background: var(--lightGray);

  padding: 2rem;
  opacity: 0;

  .project-type {
    display: flex;
    justify-content: end;
    padding-bottom: 1rem;
    font-size: 1.2em;
    font-weight: 600;

    text-transform: uppercase;
  }

  .project-description {
    font-size: 1.25rem;
    text-indent: 2rem;
    line-height: 1.3;
    user-select: none;
    cursor: auto;
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
    font-size: 1.3rem;
    text-transform: capitalize;

    &::marker {
      color: var(--lightOrange);
    }
  }
`;

const LinksStyles = styled.div`
  position: absolute;
  bottom: 0;
  right: -25%;
  a {
    font-size: 2rem;
    color: var(--white);
    padding: 1rem;
    transition: all 0.25s;

    &:hover svg {
      color: var(--orange);
      transform: scale(1.3);
    }
  }
`;

const ProjectStyles = styled.div<IProjectProps>`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 20rem;

  .project-img {
    position: relative;
    object-fit: contain;
    height: 400px;
    width: 700px;
    max-width: 70vw;
    cursor: pointer;
  }

  .project-title {
    position: absolute;
    top: -2rem;

    color: var(--orange);
    font-size: 2.6rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  &:nth-of-type(2n + 1) {
    .project-img {
      margin-left: -20rem;
    }

    .project-title {
      right: -30%;
    }

    ${LinksStyles} {
      position: absolute;
      bottom: 0;
      right: -25%;
    }

    ${DescriptionStyles} {
      position: absolute;
      top: 25%;
      right: -30%;
      transform: translate(300%);
      animation: ${(props: IProjectProps) =>
          props.inView && fadeInR}
        1s;
      animation-fill-mode: forwards;
    }
  }

  &:nth-of-type(2n) {
    .project-img {
      margin-left: 20rem;
    }

    .project-title {
      left: -30%;
    }

    ${LinksStyles} {
      position: absolute;
      bottom: 0;
      left: -25%;
    }

    ${DescriptionStyles} {
      position: absolute;
      top: 25%;
      left: -30%;
      transform: translate(-300%);
      animation: ${props => props.inView && fadeInL} 1s;
      animation-fill-mode: forwards;
    }
  }
`;

export { ProjectStyles, LinksStyles, DescriptionStyles };
