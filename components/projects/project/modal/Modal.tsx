import { useCallback, useEffect, useRef } from 'react';
import {
  CloseModalButton,
  ModalContent,
  ModalBackground,
  ModalWrapper,
} from './ModalStyles';

interface IModalProps {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

const Modal = ({
  showModal,
  setShowModal,
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
      {showModal && (
        <ModalBackground
          onClick={closeModal}
          ref={modalRef}
        >
          <ModalWrapper showModal={showModal}>
            <ModalContent>
              <h2>Image Slider</h2>
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
