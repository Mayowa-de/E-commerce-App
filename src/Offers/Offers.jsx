import React from "react";
//import "./Offers.css";
import exclusive_image from "../assets/Assets/exclusive_image.png";
import { Link } from "react-router-dom";
export default function Offers() {
  return (
    <div className="offers bg-[linear-gradient(100deg,_#fde1ff,_#e1ffea22_60%)] flex gap-2 md:gap-20 items-center justify-center w-full md:w-5xl ">
      <div className="offers-left flex flex-col gap-5 pl-7 w-full">
        <h1 className="md:text-5xl text-2xl font-bold">Exclusive</h1>
        <h1 className="md:text-5xl font-bold text-2xl">Offers For You</h1>
        <p className="md:text-2xl font-bold text-md">ONLY ON BEST SELLERS PRODUCTS</p>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <button className="bg-red-600 rounded-4xl md:w-72 md:h-16 w-32 h-10 text-md md:text-3xl text-white">Check Now</button>
        </Link>
      </div>
      <div className="offers-right w-full flex">
        <img src={exclusive_image} alt="image " className="md:w-96 w-72 h-72 md:h-96"/>
      </div>
    </div>
  );
}
