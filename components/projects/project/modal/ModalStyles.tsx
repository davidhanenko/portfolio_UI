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
  background: rgba(0, 0, 0, 0.5);
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
  width: 80%;
  height: 100%;
  color: var(--dark);
  position: relative;
  z-index: 10;
  opacity: 0;
  transform: scale(0.5);

  animation: ${props => props.showModal && modal} 0.3s;
  animation-fill-mode: forwards;
`;

const ModalContent = styled.div`
  /* background: black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: var(--dark);

  position: relative;
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: fixed;
  top: 2rem;
  right: -15%;
  width: 3rem;
  height: 3rem;
  padding: 0;
  z-index: 10;

  color: var(--white);
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

export {
  ModalBackground,
  ModalWrapper,
  ModalContent,
  CloseModalButton,
  BackgroundOverlay,
};
