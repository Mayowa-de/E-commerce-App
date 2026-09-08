import React from "react";
//import "./Offers.css";
import exclusive_image from "../assets/Assets/exclusive_image.png";
import { Link } from "react-router-dom";
export default function Offers() {
  return (
    <section className="offers w-full max-w-7xl bg-[#e6d8d2] px-5 py-10 sm:px-8 md:px-12 md:py-14 lg:px-20">
      <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
      <div className="offers-left flex flex-col items-start">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#b24835]">A little something extra</p>
        <h2 className="max-w-lg text-4xl font-black leading-[0.98] tracking-tight text-[#1e2524] sm:text-5xl lg:text-6xl">Exclusive offers for your everyday rotation.</h2>
        <p className="mt-5 max-w-md text-sm leading-6 text-[#5f625f] sm:text-base">Thoughtful staples and best sellers, selected for easy, confident dressing.</p>
        <Link to="/login" className="mt-8 inline-flex bg-[#1e2524] px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#b24835]">
          Check the edit
        </Link>
      </div>
      <div className="offers-right flex justify-center md:justify-end">
        <img src={exclusive_image} alt="Featured clothing from the exclusive collection" className="h-auto max-h-[300px] w-full max-w-sm object-contain sm:max-h-[380px]"/>
      </div>
    </div>
    </section>
  );
}
