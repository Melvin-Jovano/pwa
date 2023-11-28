import { Navigate } from "react-router-dom";
import { HomePage, LoginPage } from "../pages";

const routes = (isLoggedIn) => [
    {
        path: '/',
        element: isLoggedIn ? <HomePage /> : <Navigate to='/login' />
    },
    {
        path: '/login',
        element: !isLoggedIn ? <LoginPage /> : <Navigate to='/' />
    },
];

export default routes;