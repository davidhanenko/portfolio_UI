import styled from 'styled-components';

const AboutImg = styled.section`
  position: relative;
  display: block;

  @media (max-width: 768px) {
    padding: 7rem 1rem;
  }

  @media (max-width: 576px) {
    display: flex;
    justify-content: center;
  }
`;

export { AboutImg };
