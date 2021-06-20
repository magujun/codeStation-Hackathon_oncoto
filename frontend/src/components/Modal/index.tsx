import React, { ReactNode } from 'react';
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

type ModalProps = {
  open?: boolean;
  onClose: () => void;
  title?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
};

export const Modal = ({ title, footer, children, onClose, open = false }: ModalProps) => {
  return (
    <ChakraModal size="xl" isOpen={open} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="56rem">
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {children}
        </ModalBody>

        <ModalFooter>
          {footer}
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};
