import {FC} from "react";
import {RatingProps} from "./Rating.interface";

const Rating: FC<RatingProps> = ({value, hasBorder = true, className = ''}) => {
    return (
        <div className={`rating ${className}`}>
            <div className="rating__value">{value}</div>
        </div>
    )
}

export default Rating