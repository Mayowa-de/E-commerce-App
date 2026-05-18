import React from "react";

import data_product from "../assets/Assets/data";
import Items from "../Items/Items";

export default function Popular() {
  return (
    <div className="popular flex gap-10 justify-center flex-col w-full items-center md:px-20 px-2 mt-2 mb-12">
      <div className="flex gap-5 items-center flex-col">
      <h1 className="md:text-3xl text-xl font-bold">POPULAR IN WOMEN</h1>
      <hr className="md:w-80 w-56" />
      </div>
      <div className="popular-item md:flex justify-center items-center gap-5  md:px-20 w-full grid grid-cols-2 ">
        {data_product.map((item, i) => {
          return (
            <Items
             className='flex w-full flex-col gap-3 rounded-xl shadow-xl '
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
    </div>
  );
}
