import hand_icon from "../assets/Assets/hand_icon.png";
import arrow_icon from "../assets/Assets/arrow.png";
import hero_image from "../assets/Assets/hero_image.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero relative isolate w-full overflow-hidden bg-[#f5f1ee]">
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-1/2 bg-[#e6d8d2] md:block" />
      <div className="mx-auto grid min-h-[620px] max-w-7xl grid-cols-1 items-center gap-8 px-5 py-12 sm:px-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12 md:px-12 md:py-16 lg:min-h-[680px] lg:px-20">
        <div className="flex flex-col items-start justify-center">
          <div className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#b24835]">
            <span className="h-px w-10 bg-[#b24835]" />
            New arrivals
          </div>
          <h1 className="max-w-xl text-5xl font-black leading-[0.95] tracking-tight text-[#1e2524] sm:text-6xl lg:text-8xl">
            New season. <img src={hand_icon} alt="" className="absolute right-0 top-12 w-12 opacity-80 sm:right-12 sm:w-16 md:right-0 md:left-80 md:top-[120px]" />
            <span className="block text-[#b24835]">Fresh energy.</span>
          </h1>
          <p className="mt-7 max-w-md text-base leading-7 text-[#5f625f] sm:text-lg">
            Easy pieces, expressive layers, and everyday essentials designed to move with you.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              to="/womens"
              className="group flex items-center gap-4 bg-[#1e2524] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#b24835]"
            >
              Shop new arrivals
              <img src={arrow_icon} alt="" className="w-5 brightness-0 invert transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/mens" className="border-b border-[#1e2524] pb-1 text-sm font-bold uppercase tracking-[0.12em] text-[#1e2524]">
              Explore menswear
            </Link>
          </div>
          <div className="mt-12 flex gap-8 border-t border-[#d8cbc5] pt-5 text-xs uppercase tracking-[0.14em] text-[#77736f]">
            <span><strong className="block text-lg text-[#1e2524]">36+</strong> styles</span>
            <span><strong className="block text-lg text-[#1e2524]">04</strong> categories</span>
          </div>
        </div>
        <div className="relative flex min-h-[330px] items-end justify-center bg-[#e6d8d2] px-8 pt-8 sm:min-h-[440px] md:min-h-[560px] md:px-12 md:pt-12">
          <div className="absolute left-5 top-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#7b6b64] md:left-8 md:top-8">K / 2025 EDIT</div>

          <img src={hero_image} alt="Model wearing a new K-SHOP collection" className="relative z-10 max-h-[430px] w-auto max-w-full object-contain drop-shadow-2xl sm:max-h-[520px] md:max-h-[600px]" />
          <div className="absolute bottom-5 left-5 text-xs font-medium text-[#7b6b64] md:bottom-8 md:left-8">Designed for everyone</div>
             <div className="text-center text-sm text-[#7b6b64] ml-12 transl">Mayotech</div>
        </div>
     
      </div>
    </section>
  );
}
