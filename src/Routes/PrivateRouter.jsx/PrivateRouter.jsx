import { useContext } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../../Auth/AuthContext/AuthContext";
import Loader from "../../Pages/Loader/Loader";

const PrivateRouter = ({ children }) => {
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);

  // show loader while auth state is being determined
  if (loading) {
    return <Loader />;
  }

  // if not authenticated, redirect to login
  if (!user) {
    navigate("/authentication/login");
    return null;
  }

  // render children (do NOT return an object)
  return children;
};

export default PrivateRouter;
