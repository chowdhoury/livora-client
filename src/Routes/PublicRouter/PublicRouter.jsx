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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrimaryLayout />,
    // errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/authentication/sign-up",
        element: <SignUpPage />,
      },
      {
        path: "/authentication/sign-in",
        element: <SignInPage />,
      },
      {
        path: "/authentication/password-reset",
        element: <PasswordResetPage />,
      },
      {
        path: "/listed-properties",
        loader: async () => {
          try {
            const response = await fetch("http://localhost:3000/api/properties");
            const data = await response.json();
            return data;
          } catch (error) {
            return [];
          }

        } ,
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
