import styled from 'styled-components';

const Text = styled.article`
  padding: 0 3rem;
  color: var(--white);

  position: relative;

  @media (max-width: 768px) {
    padding-bottom: 6rem;
  }

  @media (max-width: 576px) {
    font-size: 0.8rem;
    padding-bottom: 5rem;
  }
  h2 {
    font-size: 3em;
    color: var(--white);
    padding-bottom: 2rem;
  }
  p {
    font-size: 1.8em;
    padding: 1rem 0;
  }

  /* resume button */
  a {
    position: absolute;
    bottom: 0;

    color: var(--white);
    background: var(--gray);
    font-size: 2rem;
    text-transform: uppercase;
    padding: 0.75rem 1.5rem;

    transition: all 0.25s;

    &:hover {
      color: var(--orange);
    }
  }
`;

export { Text };
