import styled from 'styled-components';

const ContactStyles = styled.div`
  scroll-snap-align: start;

  position: relative;
  height: 100vh;

  display: flex;
  justify-content: center;

  @media (max-width: 576px) {
    scroll-snap-align: center;
  }

  /* padding-top: var(--headerHeight); */
`;

export { ContactStyles };
