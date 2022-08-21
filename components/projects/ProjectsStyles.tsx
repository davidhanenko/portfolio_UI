import styled from 'styled-components';

type ProjectsProps = {
  readonly scrollWithModal: boolean;
};

const ProjectsContainer = styled.div`
  scroll-snap-align: start;

  ${(props: ProjectsProps) =>
    !props.scrollWithModal && `overflow-x: hidden;`};

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
      margin-left: auto;
    }
  }
`;

export { ProjectsContainer };
