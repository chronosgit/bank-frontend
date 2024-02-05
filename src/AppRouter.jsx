import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./router/routes";

const router = createBrowserRouter(routes);

const AppRouter = () => {

    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter;