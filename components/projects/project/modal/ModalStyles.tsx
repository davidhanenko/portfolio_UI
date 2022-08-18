import styled, { keyframes } from 'styled-components';
import { MdClose } from 'react-icons/md';

interface ModalProps {
  readonly showModal: boolean;
}

const modal = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
   100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const BackgroundOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9;
  top: 0;
  left: 0;
`;

const ModalBackground = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 2rem;
`;

const ModalWrapper = styled.div<ModalProps>`
  position: relative;
  width: 80%;
  height: 100%;
  color: var(--dark);
  z-index: 10;
  opacity: 0;
  transform: scale(0.5);

  animation: ${props => props.showModal && modal} 0.3s;
  animation-fill-mode: forwards;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: var(--dark);
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: fixed;
  top: -3rem;
  right: -15%;
  width: 3rem;
  height: 3rem;
  padding: 0;
  z-index: 10;

  color: var(--white);
  transition: opacity 0.2s;

  @media (max-width: 576px) {
    right: -20%;
  }

  &:hover {
    opacity: 0.7;
  }
`;

const ImagePlaceholderStyles = styled.div`
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
  height: 500px;
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJ3aGl0ZSI+CiAgPHBhdGggZD0iTTAgNCBMMCAyOCBMMzIgMjggTDMyIDQgeiBNNCAyNCBMMTAgMTAgTDE1IDE4IEwxOCAxNCBMMjQgMjR6IE0yNSA3IEE0IDQgMCAwIDEgMjUgMTUgQTQgNCAwIDAgMSAyNSA3Ij48L3BhdGg+Cjwvc3ZnPg==')
    no-repeat center hsl(0, 0%, 80%);
`;

export {
  ModalBackground,
  ModalWrapper,
  ModalContent,
  CloseModalButton,
  BackgroundOverlay,
  ImagePlaceholderStyles,
};
