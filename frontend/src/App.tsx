import React, {useEffect} from 'react';
import './index.scss';
import {Route, Router, Routes, useNavigate} from "react-router-dom";
import Home from "./pages/home/Home";
import PageNotFound from "./pages/page-not-found/Page-not-found";
import useCheckIsMobile from "./utils/hooks/useCheckIsMobile";
import Mobile from "./pages/mobile/Mobile";

function App() {
    const isMobile = useCheckIsMobile();
    const navigate = useNavigate();

    useEffect(() => {
        isMobile ? navigate("/mobile-version") : navigate("/")
    }, [isMobile])
    return (
        <Routes>
            <Route path="/" element={<React.Suspense fallback={<>...</>}><Home/></React.Suspense>}/>
            <Route path="/mobile-version" element={<React.Suspense fallback={<>...</>}><Mobile /></React.Suspense>}/>
            <Route path="*" element={<React.Suspense fallback={<>...</>}><PageNotFound/></React.Suspense>}/>
        </Routes>
    );
}

export default App;
