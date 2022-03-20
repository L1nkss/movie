import {FunctionComponent, useEffect, useState} from "react";
import {listenerOff, listenerOn} from "../listeners";

const useScrollingUp = (): [boolean, boolean] => {
    let prevScroll: number = 0;
    const [scrollingUp, setScrollingUp] = useState<boolean>(true);
    const [isPositionTop, setIsPositionTop] = useState<boolean>(true);
    const handleScroll = () => {
        const currScroll = window.pageYOffset;
        const isScrolled = prevScroll >= currScroll;
        const isPositionTop = currScroll === 0;

        setScrollingUp(isScrolled);
        setIsPositionTop(isPositionTop)
        prevScroll = currScroll;
    }

    useEffect(() => {
        listenerOn(document, 'scroll', handleScroll);

        prevScroll = window.pageYOffset;

        return () => {
            listenerOff(document, 'scroll', handleScroll);
        }
    }, [])

    return [scrollingUp, isPositionTop];
}

export default useScrollingUp;