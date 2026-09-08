import React from "react";

import data_product from "../assets/Assets/data";
import Items from "../Items/Items";

export default function Popular() {
  return (
    <section className="popular motion-safe:animate-[fade-up_700ms_120ms_ease-out_both] flex w-full max-w-7xl flex-col items-center gap-8 px-5 py-8 sm:px-8 md:px-12 md:py-14 lg:px-20">
      <div className="flex w-full items-end justify-between border-b border-[#dedbd7] pb-4">
      <div>
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#b24835]">Most wanted</p>
      <h1 className="text-3xl font-black tracking-tight text-[#1e2524] sm:text-4xl">Popular in women</h1>
      </div>
      <span className="hidden text-sm text-[#77736f] sm:block">Four everyday favourites</span>
      </div>
      <div className="popular-item flex w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-4 md:gap-5 md:overflow-visible md:pb-0">
        {data_product.map((item, i) => {
          return (
            <Items
             className='min-w-[78vw] snap-start sm:min-w-[42vw] md:min-w-0'
              key={i}
              id={item.id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </section>
  );
}
