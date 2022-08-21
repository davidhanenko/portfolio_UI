import styled from 'styled-components';

const Stack = styled.section`
  padding-top: 5rem;
  color: var(--white);

  h3 {
    font-size: 2rem;
    letter-spacing: 0.07rem;
    font-weight: 400;
    padding-bottom: 0.5rem;
  }

  .tech-title,
  .tech-l-title {
    display: inline-block;
    font-size: 1.5rem;
    font-weight: 200;
    letter-spacing: 0.11rem;

    &::after {
      content: '|';
      padding: 0 0.5rem;
      color: var(--lightOrange);
    }

    &:last-of-type {
      &::after {
        content: '';
      }
    }
  }

  hr {
    margin: 3rem 0;
  }
`;

export { Stack };
