import { createBrowserRouter } from "react-router";
import PrimaryLayout from "../../Layouts/PrimaryLayout/PrimaryLayout";
import HomePage from "../../Pages/HomePage/HomePage";
import ListedPropertiesPage from "../../Pages/ListedPropertiesPage/ListedPropertiesPage";
import ListPropertyPage from "../../Pages/ListPropertyPage/ListPropertyPage";
import MyFeedbacksPage from "../../Pages/MyFeedbacksPage/MyFeedbacksPage";
import MyListingsPage from "../../Pages/MyListingsPage/MyListingsPage";
import PasswordResetPage from "../../Pages/PasswordResetPage/PasswordResetPage";
import PropertyDetailsPage from "../../Pages/PropertyDetailsPage/PropertyDetailsPage";
import SignInPage from "../../Pages/SignInPage/SignInPage";
import SignUpPage from "../../Pages/SignUpPage/SignUpPage";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import PublicRouterLoader from "./PublicRouterLoader";
import Loader from "../../Components/Shared/Loader/Loader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrimaryLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <PublicRouterLoader>
            <HomePage />
          </PublicRouterLoader>
        ),
      },
      {
        path: "/authentication/sign-up",
        element: (
          <PublicRouterLoader>
            <SignUpPage />
          </PublicRouterLoader>
        ),
      },
      {
        path: "/authentication/sign-in",
        element: (
          <PublicRouterLoader>
            <SignInPage />
          </PublicRouterLoader>
        ),
      },
      {
        path: "/authentication/password-reset",
        element: (
          <PublicRouterLoader>
            <PasswordResetPage />
          </PublicRouterLoader>
        ),
      },
      {
        path: "/listed-properties",
        loader: async () => {
          try {
            const response = await fetch(
              "http://localhost:3000/api/properties"
            );
            const data = await response.json();
            return data;
          } catch (error) {
            return [];
          }
        },
        hydrateFallbackElement: <Loader/>,
        element: <ListedPropertiesPage />,
      },
      {
        path: "/listed-properties/:propertyId",
        element: (
          <PrivateRouter>
            <PropertyDetailsPage />
          </PrivateRouter>
        ),
      },
      {
        path: "/user/my-listings",
        element: (
          <PrivateRouter>
            <MyListingsPage />
          </PrivateRouter>
        ),
      },
      {
        path: "/user/my-feedbacks",
        element: (
          <PrivateRouter>
            <MyFeedbacksPage />
          </PrivateRouter>
        ),
      },
      {
        path: "/user/list-property",
        element: (
          <PrivateRouter>
            <ListPropertyPage />
          </PrivateRouter>
        ),
      },
    ],
  },
]);
