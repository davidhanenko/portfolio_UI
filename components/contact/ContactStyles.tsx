import styled from 'styled-components';

const ContactContainer = styled.div`
  scroll-snap-align: start;

  /* margin: 20rem 0; */

  position: relative;
  /* overflow-y: scroll; */
  overflow-y: hidden;

  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: calc(var(--headerHeight) + 5rem);
    /* padding-bottom: 20rem; */
  }

  @media (max-width: 576px) {
    scroll-snap-align: center;
  }
`;

export { ContactContainer };
