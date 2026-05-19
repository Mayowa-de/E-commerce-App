import React, { useContext } from "react";
//import "./CartItems.css";
import { ShopContext } from "../Pages/ShopContext";
import hand_icon from "../assets/Assets/hand_icon.png";
import remove_icon from "../assets/Assets/cart_cross_icon.png";

export default function CartItems() {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);
  return (
    <main className="cartitems flex flex-col mt-10  gap-3">
      <div className="cartitems-format-main flex gap-36 text-[#454545] ml-10 font-medium">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="border-0 h-[3px] bg-[#e2e2e2]"  />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <>
              <div className="cartitems-format cartitems-format-main flex w-full gap-[95px] ml-4 font-medium p-[20px] items-center">
                <img src={e.image} alt="" className="cartitem-product-icon w-12 h-12" />
                <p className="w-40">{e.name}</p>
                <p className="">${e.new_price}</p>
                <button className="cartitems-quantity border-[#e2e2e2] p-2 px-4 border-2 ml-14">
                  {cartItems[e.id]}
                </button>
                <p className="ml-16">${e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartitem-remove-icon ml-18"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
                
              </div>
              <hr className="h-[3px] border-0 bg-[#e2e2e2]"/>
              </>
              
          );
        }
        return null;
      })}
         
      <div className="cartitems-down flex flex-col gap-10 font-medium">
        <div className="cartitems-total font-medium">
          <h1>cart Total</h1>
        </div>
        <div className="cartitems-total-item flex w-full justify-between">
          <p>Subtotal</p>
          <p>${getTotalCartAmount()}</p>
        </div>
        <hr className="border-none bg-[#e2e2e2] h-[3px]"/>
        <div className="cartitems-total-item flex justify-between w-full">
          <p>Shipping fee</p>
          <p>Free</p>
        </div>
        <hr className="border-none bg-[#e2e2e2] h-[3px]"/>
        <div className="cartitem-total-item flex w-full justify-between">
          <h3>Total</h3>
          <h3>${0}</h3>
        </div>
      </div>
      <button className="">PROCEED TO CHECKOUT</button>
      <div className="cartitems-promocode flex flex-col gap-3 mt-5 mb-10">
        <p className="font-medium">If you have a promo code, Enter it here </p>
        <div className="cartitems-promobox flex flex-col  p-2 w-72 gap-5">
          <div className="bg-[#eaeaea] p-2 w-full">
          <input type="text" placeholder="promo code" className="p-3 bg-transparent border-0 w-full outline-none font-medium" />
          </div>
          <button className="bg-black text-white items-center p-3">Submit</button>
        </div>
      </div>
    </main>
  );
}
