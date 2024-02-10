import Home from "../pages/home/Home";
import NotFound from "../pages/not-found/NotFound";

const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "*",
        element: <NotFound />
    }
];

export default routes;