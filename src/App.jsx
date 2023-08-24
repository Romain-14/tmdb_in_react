import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Components/Home";
import Search from "./Components/Search";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HOC from "./Components/HOC";


function App() {
    return (
        <>
        <Header/>
        
        <Routes>
            <Route path="/" element={<HOC child={Home} />} />
            <Route path="search" element={<HOC child={Search} />} />
        </Routes>

        <Footer/>
        </>
    );
}

export default App;
