const PrivateRouter = ({ children }) => {
  // const navigate = useNavigate();
  // const { user, loading } = useContext(AuthContext);

  // if (loading) {
  //   return <Loader />;
  // }

  // if (!user) {
  //   navigate("/authentication/login");
  //   return null;
  // }

  return children;
};

export default PrivateRouter;
