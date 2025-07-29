import React, { useEffect } from "react";
import logoIcon from "../assets/logo-icon.png";

const LoadingScreen = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      document.querySelector(".loading-screen").style.opacity = "0";
      setTimeout(() => {
        document.querySelector(".loading-screen").style.display = "none";
      }, 500);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="loading-screen fixed top-0 left-0 w-full h-full bg-[#023048] flex flex-col items-center justify-center z-[2000] transition-opacity duration-500">
      <img
        src={logoIcon}
        alt="HOOK Icon"
        className="w-20 h-auto mb-6 animate-pulse"
      />
      <div className="text-[#1FB4D8] text-xl tracking-wide font-medium mb-4">
        Comodidad con estilo
      </div>
      <div className="w-[200px] h-[4px] bg-white/20 rounded-full overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-0 bg-[#00B4D8] animate-loadingBar"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;


