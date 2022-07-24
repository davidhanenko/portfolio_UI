import styled from 'styled-components';

type ProjectsProps = {
  readonly scrollWithModal: boolean;
};

const ProjectsStyles = styled.div`
  scroll-snap-align: start;

  ${(props: ProjectsProps) =>
    !props.scrollWithModal &&
    `height: 100%; overflow-x: hidden;`};

  padding-top: var(--headerHeight);
  max-width: var(--maxWidth);

  h2 {
    padding-left: 10rem;
    font-size: 4rem;
    color: var(--white);
    margin-top: 4rem;
    margin-bottom: 10rem;
  }
`;

export { ProjectsStyles };
