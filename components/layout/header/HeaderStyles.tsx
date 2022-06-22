import styled from 'styled-components';

const HeaderStyles = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;

  height: var(--headerHeight);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: var(--orange);
  font-size: 7rem;

  @media (max-width: 768px) {
    background: var(--dark);
  }
`;

export { HeaderStyles };
