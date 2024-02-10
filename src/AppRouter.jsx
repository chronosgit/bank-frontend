import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/layout/header/Header";
import routes from "./router/routes";

const router = createBrowserRouter(routes);

const AppRouter = () => {

    return (
        <>
            <Header />

            <RouterProvider router={router} />
        </>
    )
}

export default AppRouter;