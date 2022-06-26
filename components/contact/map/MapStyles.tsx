import styled, { keyframes } from 'styled-components';

interface IMapProps {
  readonly inView: boolean;
}

const pulsate = keyframes`
    0% {
      transform: scale( 0.1, 0.1 );
      opacity: 0;
      }
    50% {
      opacity: 1;
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
          opacity: 1;
      }
      100% {
        transform: translateY(0) rotate(-45deg);
          opacity: 1;
      }
  `;

const MapImg = styled.div<IMapProps>`
  position: relative;
  width: 100vw;
  height: 100vh;

  @media (max-width: 768px) {
    height: 500px;
  }

  img {
    filter: saturate(15%);

    object-fit: cover;

    @media screen and (max-width: 1150px) and (min-height: 600px) {
      object-fit: contain;
    }
  }

  .pin {
    width: 30px;
    height: 30px;
    border-radius: 50% 50% 50% 0;
    background: var(--orange);
    transform: rotate(-45deg);
    position: absolute;
    left: 70%;
    top: 43%;
    margin: -20px 0 0 -20px;
    opacity: 0;
    animation: ${props => props.inView && bounce};
    animation-fill-mode: forwards;
    animation-duration: 1.3s;

    &:after {
      content: '';
      width: 14px;
      height: 14px;
      margin: 8px 0 0 8px;
      background: #2f2f2f;
      position: absolute;
      border-radius: 50%;
    }

    @media (max-width: 768px) {
      width: 20px;
      height: 20px;
      &:after {
        width: 8px;
        height: 8px;
        margin: 5px 0 0 7px;
        border-radius: 50%;
      }
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

    &:after {
      content: '';
      border-radius: 50%;
      height: 40px;
      width: 40px;
      position: absolute;
      margin: -13px 0 0 -13px;
      animation: ${props => props.inView && pulsate} 1s
        ease-out;
      animation-iteration-count: infinite;
      opacity: 0;
      box-shadow: 0 0 1px 2px var(--orange);
      animation-delay: 1.1s;
    }

    @media (max-width: 768px) {
      height: 10px;
      width: 10px;
      margin: 6px 0px 0px -15px;
      &:after {
        height: 30px;
        width: 30px;
        margin: -10px 0 0 -10px;
        box-shadow: 0 0 1px 2px var(--orange);
      }
    }
  }
`;

export { MapImg };
