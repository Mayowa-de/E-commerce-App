import { Routes, Route } from "react-router-dom";
import './index.css'
import Navbar from "./Navbar/Navbar";
import Shop from './Pages/Shop.jsx'
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from './Pages/LoginSignup.jsx'
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="flex flex-col w-full justify-center  items-center p-0 m-0">
      <Navbar />
      <Routes className='flex items-center'>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/mens" element={<ShopCategory category="men" />} />
        <Route path="/womens" element={<ShopCategory category="women" />} />
        <Route path="/kids" element={<ShopCategory category="kid" />} />

        <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart/>}/>
          
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
