import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./router/routes";

const Router = createBrowserRouter(routes);

const AppRouter = () => {

    /* 
        Header & Footer are not outside Router.Provider,
        but inside it,
        because I want to follow SPA principle 
        and use react-router-dom's Link element
    */

    return (
        <RouterProvider router={Router} />
    )
}

export default AppRouter;