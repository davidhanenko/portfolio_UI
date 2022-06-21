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
  padding-bottom: 10rem;

  .project-img {
    margin-left: -20rem;
    max-width: 70vw;
    position: relative;
    object-fit: contain;
    height: 500px;
    width: 700px;
  }

  .project-title {
    position: absolute;
    top: 0;
    right: -30%;

    color: var(--orange);
    font-size: 2.6rem;
  }
`;

const LinksStyles = styled.div`
  position: absolute;
  right: -25%;
  bottom: 0;

  a {
    font-size: 2rem;
    color: var(--white);
    padding: 1rem;
  }
`;

const DescriptionStyles = styled.div`
  position: absolute;
  top: 30%;
  right: -30%;
  width: 60%;
  height: 50%;
  padding: 2rem;
  background: var(--lightGray);
  font-size: 1.4rem;

  animation: ${fadeInR} 1s;

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

    &::marker{
      color: var(--lightOrange);
    }
  }
`;

export { ProjectStyles, LinksStyles, DescriptionStyles };
