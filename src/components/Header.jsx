import React from "react";
import logo from "../assets/icon/logo.svg";
import arrow from "../assets/icon/icon-arrow-down.svg";
import hamburger from "../assets/icon/icon-hamburger.svg";
import image from "../assets/mobile/image-header.jpg";
import image1 from "../assets/desktop/image-header.jpg";

const Header = () => {
  const links = ["About", "Services", "Projects", "Contact"];

  return (
    <nav>
      <div className="box-content relative p-8 flex justify-between items-center">
        <div>
          <img className="z-10" src={logo} alt="" />
        </div>
        <div className="flex gap-4 p-2 ">
          {links.map((link, index) => (
            <span
              key={index}
              className="z-10 p-2 rounded-full hover:bg-blue-400 active:bg-cyan-600 focus:outline-none focus:ring focus:ring-violet-300"
            >
              <a href="#" className="text-white p-4">
                {link}
              </a>
            </span>
          ))}
        </div>
        <img className="xl:hidden" src={hamburger} alt="" />
      </div>

      <div className="flex flex-col items-center ">
        <span className="font-extrabold tracking-wide text-center text-6xl text-white mb-52 z-10">
          {" "}
          We are creatives
        </span>
        <div className="z-10 -my-60 p-8">
          <img className="h-24" src={arrow} alt="" />
        </div>
        <div className="-mt-36 ">
          <div className="hidden">
            <img src={image} alt="" />
          </div>
          <div className="bg-cover bg-no-repeat bg-center z-0">
            <img className="" src={image1} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
