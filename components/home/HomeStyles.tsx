import styled from 'styled-components';

const HomeContainer = styled.div`
  scroll-snap-align: start;
  height: 100vh;
  overflow: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const HomeWrapper= styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 0 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;

  margin-top: var(--headerHeight);
`;

export { HomeWrapper, HomeContainer };
