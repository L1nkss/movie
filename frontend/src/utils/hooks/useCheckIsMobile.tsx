import {useEffect, useState} from "react";
import {listenerOff, listenerOn} from "../listeners";
import {Breakpoints} from "../../enums/breakpoints.enum";

const useCheckIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < Breakpoints.lg);
        }

        listenerOn(window, "resize", handleResize);

        handleResize();

        return () => listenerOff(window, "resize", handleResize);

    }, [])

    return isMobile;
}

export default useCheckIsMobile;