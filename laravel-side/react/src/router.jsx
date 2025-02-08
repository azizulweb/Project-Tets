import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import User from "./views/User";
import NotFound from "./views/NotFound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children:[
            {
                path: '/',
                element: <Navigate to="/user" />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/user',
                element: <User />
            },

        ]
    },

    {
        path: '/',
        element: <GuestLayout />,
        children:[
            {
                path: '/login',
                element: <Login />
            },
        
            {
                path: '/signup',
                element: <SignUp />
            },
        ]
    },
   
    {
        path: '*',
        element: <NotFound />
    },

])

export default router;