import styled from 'styled-components';

const MapStyles = styled.div`
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    filter: saturate(1%);
  }
  .icon {
    position: absolute;
    top: 35%;
    left: 67%;
    z-index: 1;
    fill: orange;
    height: 5rem;
    width: 5rem;
  }
`;

export { MapStyles };
