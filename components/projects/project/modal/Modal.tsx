import { useCallback, useEffect, useRef } from 'react';

import Slider from './slider/Slider';
import {
  CloseModalButton,
  ModalContent,
  ModalBackground,
  ModalWrapper,
  Overlay,
} from './ModalStyles';

interface IModalProps {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  slides: any;
}

const Modal = ({
  showModal,
  setShowModal,
  slides,
}: IModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: Event): void => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e: KeyboardEvent): void => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () =>
      document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      <Overlay />
      {showModal && (
        <ModalBackground
          onClick={closeModal}
          ref={modalRef}
        >
          <ModalWrapper showModal={showModal}>
            <ModalContent>
              <Slider slides={slides?.images?.data} />
            </ModalContent>
            <CloseModalButton
              aria-label='Close modal'
              onClick={() => setShowModal(prev => !prev)}
            />
          </ModalWrapper>
        </ModalBackground>
      )}
    </>
  );
};

export default Modal;
