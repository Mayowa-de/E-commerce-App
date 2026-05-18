import hand_icon from "../assets/Assets/hand_icon.png";
import arrow_icon from "../assets/Assets/arrow.png";
import hero_image from "../assets/Assets/hero_image.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero grid md:flex grid-cols-1 gap-10 bg-[linear-gradient(100deg,_#fde1ff,_#e1ffea22_60%)] justify-center items-center w-full md:gap-40">
      <div className="flex flex-col justify-center items-center ">
      <div className="hero-left text-3xl font-medium -mt-20 mb-20 items-center">
        <h2>NEW ARRIVALS ONLY</h2>
      </div>
      <div className="flex flex-col  text-justify">
      <div className="hero-hand-icon flex items-center gap-5">
        <p className="md:text-5xl text-2xl font-bold">new</p>
        <img src={hand_icon} alt="hand icon" className="md:w-32 md:h-32 w-20 h-20" />
      </div>
      <div className="hero-p md:text-5xl text-2xl font-bold flex flex-col ">
      <p >collections</p>
      <p>for everyone</p>
      </div>
      <button className="hero-latest-btn flex gap-5 items-center justify-center bg-red-500 rounded-4xl px-4 p-4 mt-10 cursor-pointer">
        
        <h1 className="text-2xl font-medium text-white"><Link to=''>Latest Collections</Link></h1>
        <img src={arrow_icon} alt="arrow icon"  className=""/>
      </button>
      </div>
      </div>
      <div className="hero-right flex justify-center">
        <img src={hero_image} alt="hero image"  className="md:w-md w-56"/>
      </div>
    </div>
  );
}
