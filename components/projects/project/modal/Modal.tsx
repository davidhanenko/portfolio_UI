import { useCallback, useEffect, useRef } from 'react';
import { useScroll } from '../../../../lib/useScroll';

import Slider from './slider/Slider';
import {
  CloseModalButton,
  ModalContent,
  ModalBackground,
  ModalWrapper,
  BackgroundOverlay,
  ImagePlaceholderStyles,
} from './ModalStyles';

interface IModalProps {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  slides: any;
  loading: boolean;
}

const ImagePlaceholder = () => {
  return <ImagePlaceholderStyles />;
};

const Modal = ({
  showModal,
  setShowModal,
  slides,
  loading,
}: IModalProps) => {
  const { scrollWithModal, setScrollWithModal } =
    useScroll();

  const slideRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // close modal on click outside
  useEffect(() => {
    const handleCloseModalOnClickOutside = (
      event: MouseEvent
    ): void => {
      if (
        showModal &&
        !slideRef?.current?.contains(event.target as Node)
      ) {
        setScrollWithModal(false);
        setShowModal(false);
      }
    };

    // click outside listener
    document.addEventListener(
      'mousedown',
      handleCloseModalOnClickOutside
    );

    // cleanup the event listener
    return () => {
      document.removeEventListener(
        'mousedown',
        handleCloseModalOnClickOutside
      );
    };
  }, [showModal]);

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

  // const images = slides?.images?.data.map(
  //   (el: any) => el.attributes?.url
  // );

  return (
    <>
      {scrollWithModal && <BackgroundOverlay />}
      {showModal && (
        <ModalBackground ref={modalRef}>
          <ModalWrapper showModal={showModal}>
            <ModalContent>
              <Slider
                showModal={showModal}
                slideRef={slideRef}
                slides={slides?.images?.data}
                loading={loading}
              />
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
