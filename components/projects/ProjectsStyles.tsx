import styled from 'styled-components';

const ProjectsContainer = styled.div`
  min-height: 100vh;
  max-width: var(--maxWidth);
  margin: 0 auto;

  overflow-x: hidden;

  padding-top: var(--headerHeight);

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  h2 {
    margin: 4rem 0 10rem 10rem;
    font-size: 5rem;
    color: var(--white);

    @media (max-width: 768px) {
      margin-top: calc(var(--headerHeight) + 5rem);
      margin-left: 2rem;
    }
  }

  .projects-wrapper {

  }

  .experiments-container {
    background: var(--offWhite);
    padding: 5rem 3rem 25rem 3rem;
    margin-bottom: 8rem;

    h3 {
      display: flex;
      justify-content: end;
      color: var(--gray);
      margin: 0 10rem 10rem 0;
      font-size: 4rem;
    }

    @media (max-width: 768px) {
      padding: 5rem 1rem 15rem 1rem;
      h3 {
        margin-right: 2rem;
      }
    }

    .experiments-wrapper {
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
  }
`;

export { ProjectsContainer };
