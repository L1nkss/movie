import {useLocation} from "react-router-dom";
import React from "react";

const useQuery = () => {
    const { search } = useLocation();

    return React.useMemo(() => {
        return new URLSearchParams(search)
    }, [search])
}

export default useQuery;