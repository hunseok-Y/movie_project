import {createBrowserRouter, Router} from "react-router-dom";
import Movies from "./screens/Movies.jsx";
import Tvs from "./screens/Tvs.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Movies/>
    },
    {
        path: '/tv',
        element: <Tvs/>
    }
])

export default router;