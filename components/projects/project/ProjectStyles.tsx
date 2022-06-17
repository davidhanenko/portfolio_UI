import styled, { keyframes } from 'styled-components';

const fadeInR = keyframes`
  0% {
    transform: translate(300%);
  }
   110% {
    transform: translate(0%);
  }
`;

const ProjectStyles = styled.div`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .project-img {
    margin-left: -20rem;
    max-width: 70vw;

    position: relative;
  }

  .project-title {
    position: absolute;
    top: 0;
    right: -30%;

    color: var(--orange);
    font-size: 3rem;
  }

  .project-description {
    position: absolute;
    top: 30%;
    right: -30%;
    width: 60%;
    height: 50%;
    padding: 2rem;
    background: var(--white);
    font-size: 1.4rem;

    animation: ${fadeInR} 1s;
  }

  .links {
    position: absolute;
    right: -25%;
    bottom: 0;

    a {
      font-size: 2rem;
      color: var(--white);
      padding: 1rem;
    }
  }
`;

export { ProjectStyles };
