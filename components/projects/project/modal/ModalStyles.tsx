import styled, { keyframes } from 'styled-components';
import { MdClose } from 'react-icons/md';

interface ModalProps {
  readonly showModal: boolean;
}

const modalFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
   100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div<ModalProps>`
  width: 70%;
  height: 100%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: var(--white);
  color: var(--dark);
  position: relative;
  z-index: 10;
  border-radius: 10px;
  opacity: 0;
  transform: scale(0.5);

  animation: ${props => props.showModal && modalFadeIn} 0.3s;
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
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  padding: 0;
  z-index: 10;
`;

export {
  ModalBackground,
  ModalWrapper,
  ModalContent,
  CloseModalButton,
};
