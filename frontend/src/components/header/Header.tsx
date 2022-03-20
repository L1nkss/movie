import {FunctionComponent} from "react";

import useScrollingUp from "../../utils/hooks/useScrollingUp";
import {HeaderProps} from "./Header.interface";

const Header: FunctionComponent<HeaderProps> = ({className}) => {
    const [isScrollUp, isPositionTop] = useScrollingUp();
    let headerClassName = 'header';

    if (className) {
        headerClassName += " " + className;
    }

    if (isPositionTop) {
        headerClassName += " header--top"
    }

    return (
        <header className={`${headerClassName} ${isScrollUp ? 'header--show' : ''}`}>
            <div>header</div>
        </header>
    )
}


export default Header;