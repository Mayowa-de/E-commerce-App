import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Pages/ShopContext";
import remove_icon from "../assets/Assets/cart_cross_icon.png";

export default function CartItems() {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
  const selectedProducts = all_product.filter((product) => cartItems[product.id] > 0);
  const total = getTotalCartAmount();

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 md:px-12 md:py-14 lg:px-20">
      <div className="border-b border-[#dedbd7] pb-5">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#b24835]">Your edit</p>
        <h1 className="text-3xl font-black tracking-tight text-[#1e2524] sm:text-4xl">Shopping cart</h1>
      </div>

      {selectedProducts.length === 0 ? (
        <div className="flex min-h-[280px] flex-col items-center justify-center gap-5 bg-[#e6d8d2] px-5 text-center">
          <p className="text-lg font-bold text-[#1e2524]">Your cart is waiting for something special.</p>
          <Link to="/" className="bg-[#1e2524] px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#b24835]">Continue shopping</Link>
        </div>
      ) : (
        <>
          <div className="hidden border-b border-[#dedbd7] pb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#77736f] md:grid md:grid-cols-[2fr_1fr_1fr_1fr_1fr_32px] md:gap-5">
            <span>Product</span><span>Price</span><span>Quantity</span><span>Total</span><span>Category</span><span />
          </div>
          <div className="flex flex-col">
            {selectedProducts.map((product) => (
              <article key={product.id} className="grid grid-cols-[72px_1fr_24px] items-center gap-4 border-b border-[#dedbd7] py-5 md:grid-cols-[2fr_1fr_1fr_1fr_1fr_32px] md:gap-5">
                <div className="flex min-w-0 items-center gap-4 md:min-w-0">
                  <img loading="lazy" src={product.image} alt={product.name} className="h-20 w-16 shrink-0 object-cover" />
                  <p className="line-clamp-2 text-sm font-medium text-[#1e2524] md:text-base">{product.name}</p>
                </div>
                <p className="hidden text-sm text-[#5f625f] md:block">${product.new_price}</p>
                <p className="hidden w-10 border border-[#c9b7ae] py-2 text-center text-sm md:block">{cartItems[product.id]}</p>
                <p className="hidden text-sm font-bold text-[#b24835] md:block">${product.new_price * cartItems[product.id]}</p>
                <p className="hidden text-sm capitalize text-[#77736f] md:block">{product.category}</p>
                <button type="button" aria-label={`Remove ${product.name}`} onClick={() => removeFromCart(product.id)} className="flex h-8 w-8 items-center justify-center border border-[#c9b7ae] transition-colors hover:border-[#b24835] hover:bg-[#b24835]"><img loading="lazy" src={remove_icon} alt="" className="h-3 w-3" /></button>
                <div className="col-span-2 flex items-center justify-between text-sm md:hidden">
                  <span className="text-[#77736f]">${product.new_price} x {cartItems[product.id]}</span>
                  <span className="font-bold text-[#b24835]">${product.new_price * cartItems[product.id]}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-[1fr_360px] md:items-start">
            <div className="border border-[#dedbd7] bg-[#f5f1ee] p-5 sm:p-6">
              <p className="mb-3 text-sm font-bold text-[#1e2524]">Have a promo code?</p>
              <div className="flex border border-[#c9b7ae] bg-white p-1">
                <label htmlFor="promo-code" className="sr-only">Promo code</label>
                <input id="promo-code" type="text" placeholder="Enter code" className="min-w-0 flex-1 px-3 py-2 text-sm outline-none" />
                <button type="button" className="bg-[#1e2524] px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-white hover:bg-[#b24835]">Apply</button>
              </div>
            </div>
            <div className="bg-[#e6d8d2] p-5 sm:p-6">
              <h2 className="text-xl font-black text-[#1e2524]">Cart total</h2>
              <div className="mt-5 flex justify-between border-b border-[#c9b7ae] pb-3 text-sm"><span>Subtotal</span><strong>${total.toFixed(2)}</strong></div>
              <div className="flex justify-between border-b border-[#c9b7ae] py-3 text-sm"><span>Shipping</span><strong>Free</strong></div>
              <div className="flex justify-between pt-4 text-lg font-black text-[#b24835]"><span>Total</span><span>${total.toFixed(2)}</span></div>
              <button type="button" className="mt-6 w-full bg-[#1e2524] p-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#b24835]">Proceed to checkout</button>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
