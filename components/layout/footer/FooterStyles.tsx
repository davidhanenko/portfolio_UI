import styled from 'styled-components';

const FooterStyles = styled.footer`
  /* scroll-snap-align: start; */

  /* position: relative; */
  overflow-y: hidden;

  display: flex;
  justify-content: center;

  padding: 5rem 0;
  
  p {
    color: var(--white);
    font-size: 1.4rem;
  }
`;

export { FooterStyles };
