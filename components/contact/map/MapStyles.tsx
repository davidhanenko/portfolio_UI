import styled, { keyframes } from 'styled-components';

interface IMapProps {
  inView: boolean;
}

const pulsate = keyframes`
    0% {
      transform: scale( 0.1, 0.1 );
      opacity: 0.0;
      }
    50% {
      opacity: 1.0;
    }
    100% {
      transform: scale( 1.2, 1.2 );
      opacity: 0;
    }
  `;

const bounce = keyframes`
      0% {
        opacity: 0;
        transform: translateY(-2000px) rotate(-45deg);
      }
      60% {
        opacity: 1;
        transform: translateY(30px) rotate(-45deg);
      }
      80% {
        transform: translateY(-10px) rotate(-45deg);
      }
      100% {
        transform: translateY(0) rotate(-45deg);
      }
  `;

const MapStyles = styled.div<IMapProps>`
  img {
    position: relative;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    filter: saturate(15%);
  }

  .pin {
    width: 30px;
    height: 30px;
    border-radius: 50% 50% 50% 0;
    background: var(--orange);
    position: absolute;
    transform: rotate(-45deg);
    left: 70%;
    top: 43%;
    margin: -20px 0 0 -20px;
    animation: ${props => props.inView && bounce};
    animation-fill-mode: both;
    animation-duration: 1s;

    @media (max-width: 900px) {
      left: 74%;
      top: 43%;
    }
    @media (max-width: 720px) {
      left: 78%;
      top: 43%;
    }
    @media (max-width: 600px) {
      left: 83%;
      top: 43%;
    }

    &:after {
      content: '';
      width: 14px;
      height: 14px;
      margin: 8px 0 0 8px;
      background: #2f2f2f;
      position: absolute;
      border-radius: 50%;
    }
  }
  .pulse {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    height: 14px;
    width: 14px;
    position: absolute;
    left: 70%;
    top: 43%;
    margin: 11px 0px 0px -12px;
    transform: rotateX(55deg);

    @media (max-width: 900px) {
      left: 74%;
      top: 43%;
    }
    @media (max-width: 720px) {
      left: 78%;
      top: 43%;
    }
    @media (max-width: 600px) {
      left: 83%;
      top: 43%;
    }
    &:after {
      content: '';
      border-radius: 50%;
      height: 40px;
      width: 40px;
      position: absolute;
      margin: -13px 0 0 -13px;
      animation: ${pulsate} 1s ease-out;
      animation-iteration-count: infinite;
      opacity: 0;
      box-shadow: 0 0 1px 2px var(--orange);
      animation-delay: 1.1s;
    }
  }
`;

export { MapStyles };
