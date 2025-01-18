import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../assets/foody.png";
export default function Navbar({ children }) {
  return (
    <div className="container-md">
      <div className="w-full flex justify-between px-8 xs:px-10 sm:px-16 md:px-24 lg:px-30 xl:px-44 2xl:px-56 py-5">
        <img src={Logo} className="h-14 w-14" alt="logo"/>
        {children}
      </div>
    </div>
  );
}
