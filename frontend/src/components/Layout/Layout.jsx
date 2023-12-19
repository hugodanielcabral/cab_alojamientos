import React from "react";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";
import { useLocation } from "react-router-dom";

export const Layout = ({ children }) => {
  const svgPath =
    "M0,224L26.7,234.7C53.3,245,107,267,160,277.3C213.3,288,267,288,320,282.7C373.3,277,427,267,480,229.3C533.3,192,587,128,640,133.3C693.3,139,747,213,800,218.7C853.3,224,907,160,960,154.7C1013.3,149,1067,203,1120,213.3C1173.3,224,1227,192,1280,149.3C1333.3,107,1387,53,1413,26.7L1440,0L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z";

  const { pathname } = useLocation();

  return (
    <>
      <div className="relative">
        <Navbar />
        <main
          className={
            pathname === "/dashboard/user"
              ? "relative z-10"
              : "relative z-10 flex justify-center min-h-screen"
          }
        >
          {children}
        </main>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute inset-0 md:h-full xl:h-full"
        >
          <path fill="#1D232A" fillOpacity="1" d={svgPath} />
        </svg>
      </div>
      <Footer />
    </>
  );
};
