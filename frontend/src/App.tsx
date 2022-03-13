import React from 'react';
import './index.scss';
import {Route, Router, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import PageNotFound from "./pages/page-not-found/Page-not-found";

function App() {
  return (
    <Routes>
        <Route path="/" element={<React.Suspense fallback={<>...</>}><Home /></React.Suspense>} />
        <Route path="*" element={<React.Suspense fallback={<>...</>}><PageNotFound /></React.Suspense>} />
    </Routes>
  );
}

export default App;
