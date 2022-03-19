import {useEffect, useState} from "react";
import {listenerOff, listenerOn} from "../listeners";

const useScrollingUp = () => {
    let prevScroll: number = 0;
    const [scrollingUp, setScrollingUp] = useState<boolean>(false);
    const handleScroll = () => {
        const currScroll = window.pageYOffset;
        const isScrolled = prevScroll > currScroll;

        setScrollingUp(isScrolled);
        prevScroll = currScroll;
    }

    useEffect(() => {
        listenerOn(window, 'scroll', handleScroll);

        return () => {
            listenerOff(window, 'scroll', handleScroll);
        }
    }, [])

    return scrollingUp;
}

export default useScrollingUp;