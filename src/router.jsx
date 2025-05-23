import {createBrowserRouter, Router} from "react-router-dom";
import Movies from "./screens/Movies.jsx";
import Tvs from "./screens/Tvs.jsx";
import Layout from "./components/Layout.jsx";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Movies/>
            },
            {
                path: '/tv',
                element: <Tvs/>
            }
        ]
    }
])

export default router;