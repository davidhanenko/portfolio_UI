import styled from 'styled-components';

const BgContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;

  padding: 0 3rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export { BgContainer };
