import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const useRequireAuth = (redirectUrl = '/signup') => {
    const auth = false // useAuth;
    const history = useNavigate();

    useEffect(() => {
        if (!auth) {
            history('redirectUrl');
        }
    }, [auth, history])

    return auth;
}