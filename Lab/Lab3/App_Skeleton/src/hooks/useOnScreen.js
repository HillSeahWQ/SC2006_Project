import { useEffect, useState } from 'react';

function runtimeObserver(stateArg) {
    let rto;

    if (typeof window !== 'undefined') {
        rto = new IntersectionObserver(([entry], observer) => {
            if (!entry.isIntersecting) { return }

            observer.unobserve(entry.target);
            stateArg(true);
        }, { root: null, rootMargin: '-10px' });
    };

    return rto;
};

export default function useOnScreen(ref) {

    const [ isIntersecting, setIsIntersecting ] = useState(false);

    const itemObserver = runtimeObserver(setIsIntersecting);

    useEffect(() => {
        if (itemObserver === null) { return }
        
        itemObserver.observe(ref.current);

        return () => itemObserver.disconnect();
    }, [itemObserver, ref]);

    return isIntersecting;
};