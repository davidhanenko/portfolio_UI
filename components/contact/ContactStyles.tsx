import styled from 'styled-components';

const ContactContainer = styled.div`
  scroll-snap-align: start;

  position: relative;
  overflow-y: hidden;


  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 576px) {
    scroll-snap-align: center;
  }
`;

export { ContactContainer };
