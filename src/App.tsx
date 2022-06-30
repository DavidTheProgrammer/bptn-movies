import React from 'react';
import Navbar from "./features/navbar/Navbar";
import {Outlet} from "react-router-dom";

const App = () => {
    return (
        <>
            <div className="h-screen overflow-y-hidden">
                <Navbar/>
                <div className="h-full overflow-y-auto">
                    <Outlet/>
                </div>

            </div>
        </>
    );
}

export default App;