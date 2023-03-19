import styled from 'styled-components';

const ProjectsContainer = styled.div`
  min-height: 100vh;
  max-width: var(--maxWidth);
  margin: 0 auto;

  overflow-x: hidden;

  padding-top: var(--headerHeight);
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  h2 {
    margin: 4rem 0 15rem 10rem;
    font-size: 5rem;
    color: var(--white);

    @media (max-width: 768px) {
      margin-top: calc(var(--headerHeight) + 5rem);
      margin-left: 2rem;
    }
  }

  .projects-wrapper {
    min-height: 100vh;
  }

  h3 {
    display: flex;
    justify-content: end;
    color: var(--lightGray);
    margin: 30rem 10rem 10rem 0;
    font-size: 4rem;

    @media (max-width: 768px) {
      margin-right: 2rem;
    }
  }

  .experiments-wrapper {
    padding: 0 3rem;
    margin-bottom: 25rem;
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 992px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 600px) {
      grid-template-columns: none;
    }
  }
`;

export { ProjectsContainer };
