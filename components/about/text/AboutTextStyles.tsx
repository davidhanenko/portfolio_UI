import styled from 'styled-components';

const Text = styled.section`
  padding: 0 3rem;
  color: var(--white);

  @media (max-width: 576px) {
    font-size: 0.8rem;
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
`;

export { Text };
