import React from 'react';
import Tvs from "./screens/Tvs.jsx";
import NavMenus from "./NavMenus.jsx";
import Movies from "./screens/Movies.jsx";
import {RouterProvider} from "react-router-dom";
import router from "./router.jsx";

const App = () => {
    return (
        <>
            <NavMenus/>
            <RouterProvider router={router}/>
        </>
    );
};

export default App;