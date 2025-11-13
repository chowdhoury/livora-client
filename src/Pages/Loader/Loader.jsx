import logo from "../../assets/logo-half.svg";

const Loader = () => {
  return (
    <div className="h-screen flex justify-center items-center z-10 bg-primary/80">
      <span>
        <img src={logo} alt="Loading..." className="w-32 h-32 animate-spin" />
      </span>
    </div>
  );
};

export default Loader;
