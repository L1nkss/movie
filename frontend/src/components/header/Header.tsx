import {FunctionComponent} from "react";

import useScrollingUp from "../../utils/hooks/useScrollingUp";
import {HeaderProps} from "./Header.interface";

const Header: FunctionComponent<HeaderProps> = ({className}) => {
    const scrolled = useScrollingUp();
    let headerClassName = 'header';

    if (className) {
        headerClassName += " " + className;
    }

    return (
        <header className={`${headerClassName} ${scrolled ? 'header--show' : ''}`}>
            <div>header</div>
        </header>
    )
}


export default Header;