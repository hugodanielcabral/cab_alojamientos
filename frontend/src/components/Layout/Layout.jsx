import React from "react";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="flex justify-center min-h-screen bg-slate-600">
        {children}
      </main>
      <Footer />
    </>
  );
};