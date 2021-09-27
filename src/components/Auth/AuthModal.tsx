import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthModal = ({ isOpen, onClose }: any) => {
    const [flag, setFlag] = useState<boolean>(true);

    const toggleModal = () => {
        setFlag((f) => !f);
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalContent>
                    <ModalHeader>
                        {flag ? 'Log In' : 'Create account'}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {flag ? (
                            <LoginForm
                                onClose={onClose}
                                toggleModal={toggleModal}
                            />
                        ) : (
                            <RegisterForm
                                onClose={onClose}
                                toggleModal={toggleModal}
                            />
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AuthModal;
