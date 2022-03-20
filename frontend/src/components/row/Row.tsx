import {FC, useState} from "react";
import FilmCard from "../film-card/FilmCard";
import FilmDetails from "../film-details/FilmDetails";

const Row: FC = () => {
    const [activeFilm, setActiveFilm] = useState<number>();
    const films = [{id: 1, isActive: true}, {id: 2}, {id: 3}, {id: 4}, {id: 5}]
    const filmCardClickHandle = (id: number) => {
        setActiveFilm(id);
    }

    const closeCardDetails = () => {
        setActiveFilm(0);
    }

    return (
        <div className="row">
            {/*  Фильмы  */}
            <div className="row__films-container">
                {films.map((film) => {
                    return <FilmCard key={film.id} onClickHandler={() => filmCardClickHandle(film.id)} isActive={activeFilm === film.id} />
                })}
            </div>
            {/*  Контейнер для информации о фильме  */}
            <div className={`row__details ${activeFilm ? "row__details--expanded" : ""}`}>
                {activeFilm && <FilmDetails close={closeCardDetails} />}
            </div>
        </div>
    )
}

export default Row