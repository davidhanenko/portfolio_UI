import styled from 'styled-components';

const HomeStyles = styled.div`
  scroll-snap-align: start;
  height: 100vh;
  overflow: hidden;
`;

const HomeContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 0 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

export { HomeStyles, HomeContainer };
