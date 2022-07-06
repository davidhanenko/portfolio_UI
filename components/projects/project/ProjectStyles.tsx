import styled, { keyframes } from 'styled-components';

interface IProjectProps {
  readonly inView: boolean;
}

const fadeInR = keyframes`
  0% {
    transform: translate(300%);
    opacity: 0;
  }
   100% {
    transform: translate(0%);
    opacity: 1;
  }
`;

const ProjectStyles = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 10rem;

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
`;

const LinksStyles = styled.section`
  position: absolute;
  right: -25%;
  bottom: 0;

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
  font-size: 1.4rem;
  cursor: auto;
  user-select: none;
  padding: 2rem;
  transform: translate(300%);
  opacity: 0;

  animation: ${props => props.inView && fadeInR} 1s;
  animation-fill-mode: forwards;

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
