import {FC} from "react";
import {FilmCardProps} from "../film-card/FilmCard.interface";
import {FilmDetailsProps} from "./FilmDetails.interface";

const FilmDetails: FC<FilmDetailsProps> = ({close}) => {
    return (
        <div className="film-details">
            {close && <button onClick={close}>Закрыть</button>}
            <div className="film-details__background">
                <div className="film-details__image" style={{backgroundImage: "url(https://avatars.mds.yandex.net/get-ott/212840/2a000001628b1c50596bd4462d7349dcb9e9/2016x1134)"}} />
            </div>
        </div>
    )
}

export default FilmDetails;