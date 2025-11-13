import { createBrowserRouter } from "react-router";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Home from "../../Pages/Home/Home";
import AllProperties from "../../Pages/AllProperties/AllProperties";
import Register from "../../Pages/Authentication/Register/Register";
import Login from "../../Pages/Authentication/Login/Login";
import AddProperties from "../../Pages/AddProperties/AddProperties";
import MyProperties from "../../Pages/MyProperties/MyProperties";
import UpdateProperties from "../../Pages/UpdateProperties/UpdateProperties";
import MyRatings from "../../Pages/MyRatings/MyRatings";
import PropertiesDetails from "../../Pages/PropertiesDetails/PropertiesDetails";
import Error from "../../Pages/Error/Error";
import ForgetPassword from "../../Pages/Authentication/ForgetPassword/ForgetPassword";
import PrivateRouter from "../PrivateRouter.jsx/PrivateRouter";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                element:<Home></Home>
            },
            {
                path: '/listed-properties',
                loader: () => fetch('http://localhost:3000/api/properties'),
                element: <AllProperties></AllProperties>
            },
            {
                path: '/properties/:id',
                element: <PrivateRouter><PropertiesDetails></PropertiesDetails></PrivateRouter>,
            },
            {
                path: '/authentication/register',
                element: <Register></Register>
            },
            {
                path:'/authentication/login',
                element: <Login></Login>
            },
            {
                path:'/authentication/forget-password',
                element: <ForgetPassword></ForgetPassword>
            },
            {
                path: '/user/list-property',
                element: <PrivateRouter><AddProperties></AddProperties></PrivateRouter>
            },
            {
                path: '/user/my-properties',
                element: <PrivateRouter><MyProperties></MyProperties></PrivateRouter>
            },
            {
                path: '/user/my-properties/update/:id',
                element: <PrivateRouter><UpdateProperties></UpdateProperties></PrivateRouter>
            },
            {
                path: 'user/my-ratings',
                element: <PrivateRouter><MyRatings></MyRatings></PrivateRouter>
            }
            
        ]
    }
])