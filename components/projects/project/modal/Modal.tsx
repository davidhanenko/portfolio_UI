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
  loading: boolean;
}

const Modal = ({
  showModal,
  setShowModal,
  slides,
  loading,
}: IModalProps) => {
  const { scrollWithModal, setScrollWithModal } =
    useScroll();

  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // close modal on click outside
  const handleCloseModalOnClickOutside = (
    event: MouseEvent
  ): void => {
    if (
      showModal &&
      !modalRef?.current?.contains(event.target as Node)
    ) {
      setScrollWithModal(false);
      setShowModal(false);
    }

    // if (overlayRef.current === e.target) {
    //   setScrollWithModal(false);
    //   setShowModal(false);
    // }
  };

  // close on 'close' btn
  const handleCloseModal = () => {
    setShowModal(false);
    setScrollWithModal(false);
  };

  // close modal on esc
  const keyPress = useCallback(
    (event: KeyboardEvent): void => {
      if (event.key === 'Escape' && showModal) {
        setShowModal(false);
        setScrollWithModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    modalRef.current !== null &&
      modalRef.current.scrollIntoView({ block: 'center' });
  }, [showModal]);

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () =>
      document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      {scrollWithModal && (
        <BackgroundOverlay
          onClick={() => handleCloseModalOnClickOutside}
          ref={overlayRef}
        />
      )}
      {showModal && (
        <ModalBackground ref={modalRef}>
          <ModalWrapper showModal={showModal}>
            <ModalContent>
              {loading ? (
                <h4>Loading...</h4>
              ) : (
                <Slider
                  modalRef={modalRef}
                  slides={slides?.images?.data}
                />
              )}
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
