import { useContext } from "react";
import { Navigate } from "react-router";
import AuthContext from "../../Auth/AuthContext/AuthContext";
import Loader from "../../Components/Shared/Loader/Loader";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to="/authentication/sign-in" state={location.pathname} />;
  }

  return children;
};

export default PrivateRouter;
