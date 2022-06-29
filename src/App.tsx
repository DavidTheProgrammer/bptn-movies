import React from 'react';
import Navbar from "./features/navbar/Navbar";
import {Outlet} from "react-router-dom";

const App = () => {
    return (
        <>
            <Navbar/>
            <div className="pt-16">
                <Outlet/>
            </div>
        </>
    );
}

export default App;