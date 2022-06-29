import { useCallback, useEffect, useRef } from 'react';

import Slider from './slider/Slider';
import {
  CloseModalButton,
  ModalContent,
  ModalBackground,
  ModalWrapper,
  BackgroundOverlay,
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

  const overlayRef = useRef<HTMLDivElement>(null);

  const handleCloseModalOnClickOutside = (
    e: React.MouseEvent
  ): void => {
    if (overlayRef.current === e.target) {
      setShowModal(false);
      setScrollWithModal(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setScrollWithModal(false);
  }

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
        <BackgroundOverlay
          onClick={handleCloseModalOnClickOutside}
          ref={overlayRef}
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
              onClick={handleCloseModal}
            />
          </ModalWrapper>
        </ModalBackground>
      )}
    </>
  );
};

export default Modal;
