import {FC} from "react";
import {FilmCardProps} from "./FilmCard.interface";
import Rating from "../rating/Rating";

const FilmCard: FC<FilmCardProps> = ({onClickHandler, isActive}) => {

    return (
        <div className={`film-card ${isActive ? "film-card--active" : ""}`} onClick={onClickHandler}>
            <Rating value={7.8} className="film-card__rating" />
            <img src="https://avatars.mds.yandex.net/get-ott/2439731/2a0000017eb9dfefb968b30203c549701cfe/640x360" alt=""/>
        </div>
    )
}

export default FilmCard;