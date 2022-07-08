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

const ProjectStyles = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 20rem;

  &:nth-of-type(2n + 1) {
    .project-img {
      margin-left: -20rem;
      max-width: 70vw;
      position: relative;
      object-fit: contain;
      height: 400px;
      width: 700px;
      cursor: pointer;
    }

    .project-title {
      position: absolute;
      top: -2rem;
      right: -30%;

      color: var(--orange);
      font-size: 2.6rem;
    }
  }

  &:nth-of-type(2n) {
    .project-img {
      margin-left: 20rem;
      max-width: 70vw;
      position: relative;
      object-fit: contain;
      height: 400px;
      width: 700px;
      cursor: pointer;
    }

    .project-title {
      position: absolute;
      top: -2rem;
      left: -30%;

      color: var(--orange);
      font-size: 2.6rem;
    }
  }
`;

const LinksStyles = styled.section`
  position: absolute;
  bottom: 0;

  &:nth-of-type(2n + 1) {
    right: -25%;
  }

  &:nth-of-type(2n) {
    left: -25%;
  }

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

const DescriptionStyles = styled.section<IProjectProps>`
  position: absolute;
  top: 25%;
  right: -30%;
  width: 60%;
  height: 60%;

  background: var(--lightGray);
  font-size: 1.3rem;
  cursor: auto;
  user-select: none;
  padding: 2rem;
  transform: translate(300%);
  opacity: 0;

  animation: ${props => props.inView && fadeInR} 1s;
  animation-fill-mode: forwards;

  .project-type {
    display: flex;
    justify-content: end;
    text-transform: capitalize;
    padding-bottom: 1rem;
    font-size: 1.2em;
    font-weight: 600;
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

    &::marker {
      color: var(--lightOrange);
    }
  }
`;

export { ProjectStyles, LinksStyles, DescriptionStyles };
