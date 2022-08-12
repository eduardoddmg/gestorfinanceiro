import { useDisclosure, Modal as ModalChakra, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from '@chakra-ui/react';

export default function Modal(props) {
	const { isOpen, onClose, title, content } = props;
	return (
		<ModalChakra isCentered isOpen={isOpen} onClose={onClose}>
	        <ModalOverlay />
	        <ModalContent>
	          <ModalHeader>{title}</ModalHeader>
	          <ModalCloseButton />
	          <ModalBody>
	            {content}
	          </ModalBody>
	        </ModalContent>
      </ModalChakra>	
      );
}