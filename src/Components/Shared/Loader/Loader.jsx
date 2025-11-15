import React from 'react';
import logo from "../../../assets/logo-half.svg";

const Loader = () => {
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-primary/70 z-50 backdrop-blur-sm">
        <span>
          <img
            src={logo}
            alt="Loading..."
            className="w-32 h-32 animate-spin"
            style={{ animationDuration: "2s" }}
          />
        </span>
      </div>
    );
};

export default Loader;