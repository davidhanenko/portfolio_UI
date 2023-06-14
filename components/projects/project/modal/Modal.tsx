import { useCallback, useEffect, useRef } from 'react';
import { useScroll } from '../../../../lib/useScroll';

import Slider from '../../../single-project/slider/Slider';
import {
  CloseModalButton,
  ModalContent,
  ModalBackground,
  ModalWrapper,
  BackgroundOverlay,
} from './ModalStyles';
import { ImagePlaceholderStyles } from '../../../single-project/slider/SliderStyles';
import { IMAGE_PLACEHOLDER as placeholderImg } from '../../../../config';

interface IModalProps {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  slides: any;
}

const ImagePlaceholder = () => {
  return (
    <ImagePlaceholderStyles
      placeholderImg={placeholderImg}
    />
  );
};

const Modal = ({
  showModal,
  setShowModal,
  slides,
}: IModalProps) => {
  const slideRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const { scrollWithModal, setScrollWithModal } =
    useScroll();

  // close modal on click outside
  useEffect(() => {
    const handleCloseModalOnClickOutside = (
      event: MouseEvent
    ): void => {
      if (
        showModal &&
        !slideRef?.current?.contains(event.target as Node)
      ) {
        setShowModal(false);
        setScrollWithModal(false);
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
  }, [setShowModal, showModal]);

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
      {scrollWithModal && <BackgroundOverlay />}
      {showModal && (
        <ModalBackground ref={modalRef}>
          <ModalWrapper showModal={showModal}>
            <ModalContent>
              <Slider
                showModal={showModal}
                slideRef={slideRef}
                slides={slides?.images?.data}
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
