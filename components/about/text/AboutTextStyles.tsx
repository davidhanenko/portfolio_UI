import styled from 'styled-components';

const AboutTextStyles = styled.section`
  padding: 0 3rem;
  color: var(--white);
  
  @media (max-width: 576px) {
    font-size: 0.7rem;
  }
  h2 {
    font-size: 3em;
    color: var(--white);
    padding-bottom: 2rem; 
  }
  p {
    font-size: 2em;
  }
`;

export { AboutTextStyles };
