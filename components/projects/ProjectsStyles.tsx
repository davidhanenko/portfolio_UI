import styled from 'styled-components';

const ProjectsStyles = styled.div`
  scroll-snap-align: start;
  /* height: 100vh; */
  height: 100%;

  padding-top: var(--headerHeight);
  overflow-x: hidden;

  h2 {
    padding-left: 10rem;
    font-size: 4rem;
    color: var(--white);
    margin-top: 4rem;
    margin-bottom: 10rem;
  }
`;

export { ProjectsStyles };
