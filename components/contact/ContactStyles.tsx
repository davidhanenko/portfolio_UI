import styled from 'styled-components';

const ContactContainer = styled.div`
  position: relative;
  overflow-y: hidden;

  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 600px) {
    scroll-snap-align: center;
  }
`;

export { ContactContainer };
