import Header from "../../components/header/Header";
import Promo from "../../components/promo/Promo";
import Row from "../../components/row/Row";

const Home = () => {
    const films = [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
        {id: 9},
        {id: 10},
        {id: 11},
        {id: 12},
        {id: 13},
        {id: 14},
        {id: 15}
    ]
    return <div className="app-container">
        <Header />
        <Promo className="app-container__promo-block" />
        <div className="content-container">
            <Row films={films.slice(0, 5)} />
            <div style={{marginBottom: '25px'}}/>
            <Row films={films.slice(5, 10)} />
            <div style={{marginBottom: '25px'}}/>
            <Row films={films.slice(10, 15)} />
        </div>
    </div>
}

export default Home;