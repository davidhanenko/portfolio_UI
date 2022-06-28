import { useCallback, useEffect, useRef } from 'react';

import Slider from './slider/Slider';
import {
  CloseModalButton,
  ModalContent,
  ModalBackground,
  ModalWrapper,
  Overlay,
} from './ModalStyles';
import { useScroll } from '../../../../lib/useScroll';

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
  const { scrollWithModal, setScrollWithModal } =
    useScroll();

  const modalRef = useRef<HTMLDivElement>(null);

  const closeModalClickOutside = (e: Event): void => {
    if (modalRef.current === e.target) {
      setShowModal(false);
      setScrollWithModal(false);
    }
  };

  const keyPress = useCallback(
    (e: KeyboardEvent): void => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        setScrollWithModal(false);
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
      {scrollWithModal && (
        <Overlay
          onClick={closeModalClickOutside}
          ref={modalRef}
        />
      )}
      {showModal && (
        <ModalBackground>
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
