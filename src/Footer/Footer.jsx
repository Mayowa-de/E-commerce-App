import React from "react";
//import "./Footer.css";
import footer_logo from "../assets/Assets/logo_big.png";
import instagram_icon from "../assets/Assets/instagram_icon.png";
import pinestar_icon from "../assets/Assets/pintester_icon.png";
import whatsapp_icon from "../assets/Assets/whatsapp_icon.png";

export default function Footer() {
  return (
    <footer className="footer w-full bg-[#1e2524] text-[#f5f1ee]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 sm:px-8 md:px-12 lg:px-20">
      <div className="flex flex-col justify-between gap-8 border-b border-[#50605c] pb-10 md:flex-row md:items-end">
        <div className="flex items-center gap-4">
        <img src={footer_logo} alt="K-SHOP logo" className="h-20 w-20 object-contain md:h-24 md:w-24" />
        <div>
        <p className="text-2xl font-black tracking-tight md:text-3xl">K-SHOP</p>
        <p className="mt-1 text-sm text-[#b9c0ba]">Wear your everyday well.</p>
        </div>
        </div>
        <p className="max-w-xs text-sm leading-6 text-[#b9c0ba] md:text-right">Thoughtful clothing for every version of you.</p>
      </div>
      <ul className="footer-links flex flex-wrap gap-x-8 gap-y-3 text-sm font-bold uppercase tracking-[0.12em] text-[#f5f1ee]">
        <li className="transition-colors hover:text-[#d8856f]">Company</li>
        <li className="transition-colors hover:text-[#d8856f]">Products</li>
        <li className="transition-colors hover:text-[#d8856f]">Offices</li>
        <li className="transition-colors hover:text-[#d8856f]">About</li>
        <li className="transition-colors hover:text-[#d8856f]">Contact</li>
      </ul>
      <div className="footer-social-icon flex gap-3">
        <div className="footer-icons-container bg-[#2b3734] p-3 transition-colors hover:bg-[#b24835]">
          <img src={instagram_icon} alt="instagram_icon" loading="lazy" />
        </div>
        <div className="footer-icons-container bg-[#2b3734] p-3 transition-colors hover:bg-[#b24835]">
          <img src={pinestar_icon} alt="pinestar_icon" loading="lazy"/>
        </div>
        <div className="footer-icons-container bg-[#2b3734] p-3 transition-colors hover:bg-[#b24835]">
          <img src={whatsapp_icon} alt="whatsapp_icon" loading="lazy" />
        </div>
      </div>
      <div className="footer-copyright flex w-full flex-col gap-3 border-t border-[#50605c] pt-5 text-xs text-[#b9c0ba] md:flex-row md:items-center md:justify-between">
        <p>Copyright &copy; 2025 K-SHOP</p>
        <p>All rights reserved.</p>
      </div>
      </div>
    </footer>
  );
}
