import styled from 'styled-components';

const ProjectHeaderStyles = styled.div`
  padding: 5rem 0;
  display: flex;
  justify-content: space-around;
  background: var(--gradient-gray1);

  h2 {
    font-size: 2.7rem;
    margin-bottom: 2rem;
    color: var(--teal);
  }

  .outer-links {
    a {
      font-size: 2.5rem;
      color: var(--teal);
      padding: 1rem;

      position: relative;

      svg {
        transition: all 0.25s;
      }

      &:after {
        content: attr(data-tooltip);
        position: absolute;
        bottom: -4rem;
        right: 1rem;
        padding: 0.5rem 1rem;
        font-size: 0.6em;
        color: var(--white);
        background: var(--gray);
        width: 5rem;
        text-align: center;

        display: none;
        transition: all 0.25s;
      }

      @media (hover: hover) {
        &:hover svg {
          transform: scale(1.3);
        }

        &:hover::after {
          display: block;
        }

        &:active svg {
          color: var(--teal1);
          transform: scale(1.3);
        }
      }
    }
  }
`;

export { ProjectHeaderStyles };
