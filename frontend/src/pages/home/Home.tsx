import Header from "../../components/header/Header";
import Promo from "../../components/promo/Promo";
import Row from "../../components/row/Row";

const Home = () => {
    return <div className="app-container">
        <Header />
        <Promo className="app-container__promo-block" />
        <div className="content-container">
            <Row />
            <div style={{marginBottom: '25px'}}/>
            <Row />
            <div style={{marginBottom: '25px'}}/>
            <Row />
        </div>
    </div>
}

export default Home;