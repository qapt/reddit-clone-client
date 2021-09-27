import { useDisclosure } from '@chakra-ui/react';
import { useCurrentUser } from '../../api/auth';
import AuthModal from './AuthModal';

const AuthModalHandler = ({ children, action }: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { data: userData } = useCurrentUser();

    const actionHandler = () => {
        if (userData && !userData.isLoggedIn) {
            onOpen();
        } else {
            if (action) {
                action();
            }
        }
    };

    return (
        <>
            <div onClick={actionHandler}>{children}</div>
            <AuthModal isOpen={isOpen} onClose={onClose} />
        </>
    );
};

export default AuthModalHandler;
