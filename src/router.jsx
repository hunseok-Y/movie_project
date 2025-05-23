import {createBrowserRouter, Router} from "react-router-dom";
import Movies from "./screens/Movies.jsx";
import Tvs from "./screens/Tvs.jsx";
import Layout from "./components/Layout.jsx";
import Shop from "./screens/Shop.jsx";
import Actors from "./screens/Actors.jsx";
import Detail from "./screens/Detail.jsx";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Movies />
            },
            {
                path: '/tv',
                element: <Tvs />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/actors',
                element: <Actors />
            },
            {
                path: '/movie/:id',
                element: <Detail />
            },
            {
                path: '/tv/:id',
                element: <Detail />
            },
        ]
    }
])

export default router;