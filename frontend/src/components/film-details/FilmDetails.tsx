import {FC} from "react";
import {FilmCardProps} from "../film-card/FilmCard.interface";
import {FilmDetailsProps} from "./FilmDetails.interface";

const FilmDetails: FC<FilmDetailsProps> = ({close}) => {
    return (
        <div className="film-details">
            <h2 />
            {close && <button onClick={close}>Закрыть</button>}
        </div>
    )
}

export default FilmDetails;