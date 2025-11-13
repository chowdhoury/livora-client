import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routes/PublicRouter/PublicRouter.jsx";
import AuthProvider from "./Auth/AuthProvider/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
