import styled from 'styled-components';

const BgStyles = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  span {
    /* position: absolute; */
    top: 50%;
    left: 50%;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      width: 300px;
      height: 1px;
      background: linear-gradient(90deg, #fff, transparent);
    }
  }
`;

export { BgStyles };
