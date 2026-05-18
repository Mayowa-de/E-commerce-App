import React from "react";
//import "./Footer.css";
import footer_logo from "../assets/Assets/logo_big.png";
import instagram_icon from "../assets/Assets/instagram_icon.png";
import pinestar_icon from "../assets/Assets/pintester_icon.png";
import whatsapp_icon from "../assets/Assets/whatsapp_icon.png";

export default function Footer() {
  return (
    <div className="footer flex flex-col justify-center items-center gap-10 w-full">
      <div className="footer-logo flex items-center gap-10 w-72 justify-center md:w-full">
        <img src={footer_logo} alt="" className="md:w-48 md:h-48 w-28 h-28" />
        <p className="md:text-4xl text-xl font-bold">K-SHOPPER</p>
      </div>
      <ul className="footer-links flex md:gap-10 gap-3 font-medium w-full md:text-xl text-10 justify-center">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon flex gap-5 justify-center">
        <div className="footer-icons-container bg-[#fbfbfb] p-[10px] pb-[6px] border-[1px] border-[#ebebeb]">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container bg-[#fbfbfb] p-[10px] pb-[6px] border-[1px] border-[#ebebeb]">
          <img src={pinestar_icon} alt="" />
        </div>
        <div className="footer-icons-container bg-[#fbfbfb] p-[10px] pb-[6px] border-[1px] border-[#ebebeb]">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright w-full justify-center flex flex-col items-center gap-5 font-medium mb-5">
        <hr className="md:w-[35%] h-[3px] w-full bg-[#c7c7c7] border-none"/>
        <p>Copyright &copy; 2025 - All Right Reserve</p>
      </div>
    </div>
  );
}
