import React from "react";
import logo from "../assets/icon/logo.svg";
import facebook from "../assets/icon/icon-facebook.svg";
import instagram from "../assets/icon/icon-instagram.svg";
import twitter from "../assets/icon/icon-twitter.svg";
import pinterest from "../assets/icon/icon-pinterest.svg";

const Footer = () => {
  const rut = ["About", "Services", "Projects"];
  return (
    <div className="grid gap-12 grid-rows bg-teal-200 p-16">
      <div className="flex justify-center">
        <img className="invert" src={logo} alt="" />
      </div>
      <div className="flex justify-center gap-20">
        {rut.map((links, index) => (
          <span key={index}>
            <span>{links}</span>
          </span>
        ))}
      </div>
      <div className="flex justify-center gap-12 px-16 my-8">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
        <img src={pinterest} alt="" />
      </div>
    </div>
  );
};

export default Footer;
