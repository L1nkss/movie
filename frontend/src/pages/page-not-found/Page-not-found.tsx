import {Link} from "react-router-dom";
import Button from "../../components/button/Button";

const PageNotFound = () => {
    return (
        <div className="page-not-found">
            <div className="page-not-found__wrapper">
                <h1 className="page-not-found__header">404</h1>
                <p className="page-not-found__text">Oops, the page you're looking for does not exist.</p>
                <Link to="/">
                    <Button>Go home</Button>
                </Link>
            </div>
        </div>
    )
}

export default PageNotFound;