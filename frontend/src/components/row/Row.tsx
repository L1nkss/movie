import {FC, useEffect, useState} from "react";
import FilmCard from "../film-card/FilmCard";
import FilmDetails from "../film-details/FilmDetails";
import useQuery from "../../utils/hooks/useQuery";
import {RowProps} from "./Row.interface";
import {createSearchParams, useNavigate, useSearchParams} from "react-router-dom";

const Row: FC<RowProps> = ({films}) => {
    const [activeFilm, setActiveFilm] = useState<number>();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const getQuery = useQuery();

    useEffect(() => {
        const queryId = searchParams.get("id");
        const isFilmContainsInRow = films.some((film) => film.id === Number(queryId));

        if (!isFilmContainsInRow) {
            setActiveFilm(0);
        }
    }, [searchParams])

    const filmCardClickHandle = (id: number) => {
        setSearchParams(`id=${id}`)
        setActiveFilm(id);
    }

    const closeCardDetails = () => {
        setSearchParams({});
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