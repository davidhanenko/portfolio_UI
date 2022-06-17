import styled from 'styled-components';

const ContactStyles = styled.div`
  scroll-snap-align: start;

  margin: 20rem 0;

  position: relative;
  min-height: 100vh;
  overflow-y: scroll;

  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: calc(var(--headerHeight) + 5rem);
  }

  @media (max-width: 576px) {
    scroll-snap-align: center;
  }
`;

export { ContactStyles };
