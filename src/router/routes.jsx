import Home from "src/pages/home/Home";
import Auth from "src/pages/auth/Auth";
import NotFound from "src/pages/not-found/NotFound";

const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/auth/",
        children: [
            {
                path: "login",
                element: <Auth isLogin={true} />
            },
            {
                path: "register",
                element: <Auth isLogin={false} />
            },
            {
                path: "*",
                element: <NotFound />
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />
    },
];

export default routes;