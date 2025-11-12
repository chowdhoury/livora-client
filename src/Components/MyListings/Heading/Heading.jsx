import logo from "../../../assets/logo-white.svg";

const Heading = () => {
  return (
    <div className="relative">
      <div className="flex flex-col justify-center items-center text-center text-white absolute z-10 w-full h-full top-0 left-0 bg-[#2F3D7E]/60">
        <div className="max-w-3xl px-4">
          <figure className="flex justify-center">
            <img src={logo} className="h-5" alt="" />
          </figure>
          <h1 className="font-extrabold lg:text-[70px] md:text-[50px] text-[30px] leading-tight">
            My Listings
          </h1>
        </div>
      </div>
      <img
        src="https://i.postimg.cc/Fshc8vyc/house7.jpg"
        className="w-full h-[400px] "
        alt=""
      />
    </div>
  );
};

export default Heading;
