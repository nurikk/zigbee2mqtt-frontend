import { useState } from 'react';

type UseModalHook = {
    isOpen: boolean;
    toggle(): void;
};

const useModal = (defaultIsVisible: boolean): UseModalHook => {
    const [isOpen, setVisible] = useState(defaultIsVisible);
    function toggle() {
        setVisible(!isOpen);
    }
    return { toggle, isOpen };
};

export default useModal;
