
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../layout/Root";
import Login from "../login/Login";
import Register from "../register/Register";
import News from "../pages/News";
import PrivateRouter from "../firebase/PrivateRouter";
import About from "../component/About";
import Career from "../pages/Career";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/news.json")

            },
            {
                path: "/news/:id",
                element: <PrivateRouter><News></News></PrivateRouter>
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/career",
                element: <Career></Career>
            }
        ]
    }
]);

export default Router