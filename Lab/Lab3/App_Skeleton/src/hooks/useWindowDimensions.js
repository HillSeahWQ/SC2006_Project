import { useEffect, useState } from 'react';

// @author: Hill Seah Wen Qi <HILL008@e.ntu.sg>

function getWindowDimensions() {
    let screenWidth;
    let screenHeight;

    //for checking if window is defined during node build process
    if (typeof window !== 'undefined') {
        screenWidth = window.innerWidth;
        screenHeight = window.innerHeight;
    }

    return {
        screenWidth,
        screenHeight
    };
};
  
export default function useWindowDimensions() {
    const [ windowDimensions, setWindowDimensions ] = useState(getWindowDimensions());
  
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
};  
