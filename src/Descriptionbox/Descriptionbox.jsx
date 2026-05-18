import React from "react";
//import "./Descriptionbox.css";

export default function Descriptionbox() {
  return (
    <div className="descriptionBox flex flex-col px-12 mt-12">
      <div className="descriptionbox-navigator flex flex-col justify-center ">
        <div className="  items-center flex">
        <div className="descriptionbox-nav-box border-[1px] p-2">Description</div>
        <div className="descriptionbox-nav-box fade border-[1px] p-2">Reviews(122)</div>
        </div>
        <div className="descriptionbox-description border-[1px] p-4 items-center flex flex-col gap-5">
          <p>
            An e-commerce website is an online platform that faciliate buying
            and selling of products or services over the internet services as a
            virtual marketplace where businesses and individual showcase their
            products, interact with customers, and conduct transactions without
            the need for a physical presence. E-commerce websites have gained
            immense popularity due to their convience accessibility, and the
            global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services with detailed 
            descriptions, images, prices and any available value (e.g, sizes, colors),
            Each product usually has its own dedication with relevant information.
          </p>
        </div>
      </div>
    </div>
  );
}
