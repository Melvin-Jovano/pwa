import { Navigate } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage, ProfilePage, VerifyPage, CreatePasswordPage } from "../pages";

const routes = (isLoggedIn) => [
    {
        path: '/auth/login',
        element: !isLoggedIn ? <LoginPage /> : <Navigate to='/' />
    },
    {
        path: '/auth/register',
        element: !isLoggedIn ? <RegisterPage /> : <Navigate to='/' />
    },
    {
        path: '/auth/create-password',
        element: !isLoggedIn ? <CreatePasswordPage /> : <Navigate to='/' />
    },
    {
        path: '/auth/verify',
        element: !isLoggedIn ? <VerifyPage /> : <Navigate to='/auth/login' />
    },
    {
        path: '/',
        element: isLoggedIn ? <HomePage /> : <Navigate to='/auth/login' />
    },
    {
        path: '/profile',
        element: isLoggedIn ? <ProfilePage /> : <Navigate to='/auth/login' />
    },
];

export default routes;