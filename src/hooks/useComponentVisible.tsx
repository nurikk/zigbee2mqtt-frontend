import { useState, useEffect, useRef } from 'react';

export default function useComponentVisible(initialIsVisible: boolean) {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const ref = useRef<HTMLElement>(null);

    const handleHideDropdown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setIsComponentVisible(false);
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsComponentVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleHideDropdown, true);
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('keydown', handleHideDropdown, true);
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    useEffect(() => {
        if (!isComponentVisible || !ref.current || !ref.current?.parentElement) {
            return;
        }

        // show on top
        if (ref.current.clientHeight + ref.current.parentElement.offsetTop > window.screen.height + window.scrollY) {
            ref.current.parentElement.style.position = 'relative';
            ref.current.style.position = 'absolute';
            ref.current.style.bottom = '0';
            return;
        }

        // fall back to default
        ref.current.parentElement.style.position = '';
        ref.current.style.position = '';
        ref.current.style.bottom = '';
    }, [isComponentVisible]);
    return { ref, isComponentVisible, setIsComponentVisible };
}
