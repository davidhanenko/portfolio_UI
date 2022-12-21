import styled from 'styled-components';

const HomeContainer = styled.div`
  height: 100vh;
  overflow: hidden;

  max-width: var(--maxWidth);
  margin: 0 auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const HomeWrapper = styled.div`
  position: relative;
  min-height: 100%;
  width: 100%;
  padding: 0 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  margin-top: var(--headerHeight);

  &::-webkit-scrollbar {
    display: none;
  }
`;

export { HomeWrapper, HomeContainer };
