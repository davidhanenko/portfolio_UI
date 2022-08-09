import styled from 'styled-components';

type ProjectsProps = {
  readonly scrollWithModal: boolean;
};

const ProjectsStyles = styled.div`
  scroll-snap-align: start;

  ${(props: ProjectsProps) =>
    !props.scrollWithModal && `overflow-x: hidden;`};

  padding-top: var(--headerHeight);
  margin-bottom: 5rem;

@media(max-width: 768px) {
  padding: 0 1rem;
}

  h2 {
    padding-left: 10rem;
    font-size: 4.5rem;
    color: var(--white);
    margin-top: 4rem;
    margin-bottom: 15rem;
  }
`;

export { ProjectsStyles };
