"use client";
import {
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React, {
  useEffect,
  useMemo,
  useState,
  useRef,
  useLayoutEffect,
} from "react";

function ProductDetailMainImage({ image, setIsStop }) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [currentImage, setCurrentImage] = useState(image);
  const [height, setHeight] = useState(0);
  const heightRef = useRef();

  useLayoutEffect(() => {
    if (height === 0) {
      const rect = heightRef.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [image]);

  useEffect(() => {
    setCurrentImage(undefined);
    setTimeout(() => {
      setCurrentImage(image);
    }, 100);
  }, [image]);

  const onOpenModal = () => {
    setIsStop(true);
    onOpen();
  };

  const onCloseModal = () => {
    onClose();
    setIsStop(false);
  };

  const renderImage = useMemo(() => {
    return currentImage ? (
      <div
        style={{
          height,
        }}
        className="fade-in"
        onClick={onOpenModal}
      >
        <Image
          ref={heightRef}
          height={height}
          width={"100%"}
          src={image.image}
        />
      </div>
    ) : (
      <div
        style={{
          height,
        }}
      />
    );
  }, [currentImage, height]);

  return (
    <div>
      <Modal backdrop="blur" size="5xl" isOpen={isOpen} onClose={onCloseModal}>
        <ModalContent>
          {(onCloseModal) => {
            return (
              <>
                <ModalHeader />
                <ModalBody>
                  <Image width={"100%"} src={image.image} />
                </ModalBody>
                <ModalFooter />
              </>
            );
          }}
        </ModalContent>
      </Modal>
      {renderImage}
    </div>
  );
}

export default ProductDetailMainImage;
