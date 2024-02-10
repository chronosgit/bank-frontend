import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ThemeContext from "./contexts/ThemeContext";
import useTheme from "./hooks/useTheme";
import routes from "./router/routes";

const Router = createBrowserRouter(routes);

const AppRouter = () => {

    const [theme] = useTheme();

    /* 
        Header & Footer are not outside Router.Provider,
        but inside it,
        because I want to follow SPA principle 
        and use react-router-dom's Link element
    */

    return (
        <ThemeContext.Provider value={theme}>
            <RouterProvider router={Router} />
        </ThemeContext.Provider>
    )
}

export default AppRouter;