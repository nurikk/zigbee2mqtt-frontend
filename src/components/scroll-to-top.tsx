import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        document.getElementsByTagName('main')?.[0]?.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
