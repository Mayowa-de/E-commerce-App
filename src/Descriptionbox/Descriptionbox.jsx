import React from "react";
//import "./Descriptionbox.css";

export default function Descriptionbox() {
  return (
    <section className="descriptionBox mx-auto flex w-full max-w-7xl flex-col px-5 py-10 sm:px-8 md:px-12 lg:px-20">
      <div className="descriptionbox-navigator flex flex-col">
        <div className="flex items-center">
        <div className="descriptionbox-nav-box border border-[#1e2524] bg-[#1e2524] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white">Description</div>
        <div className="descriptionbox-nav-box border border-[#dedbd7] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#77736f]">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description grid gap-5 border border-[#dedbd7] p-5 text-sm leading-7 text-[#5f625f] sm:p-7 md:grid-cols-2">
          <p>Designed for easy, everyday wear, this piece balances a comfortable fit with a polished finish. Style it with your existing wardrobe for a look that feels effortless and considered.</p>
          <p>Each K-SHOP product is selected for its versatile shape, wearable color, and ability to move across your week. Check the size guide above before adding it to your edit.</p>
        </div>
      </div>
    </section>
  );
}
