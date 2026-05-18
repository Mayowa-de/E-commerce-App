import { Routes, Route } from "react-router-dom";
import './index.css'
import Navbar from "./Navbar/Navbar";
import Shop from './Pages/Shop.jsx'
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from './Pages/LoginSignup.jsx'
import Footer from "./Footer/Footer";
import men_banner from './assets/Assets/banner_mens.png'
import women_banner from './assets/Assets/banner_women.png'
import kid_banner from './assets/Assets/banner_kids.png'

function App() {
  return (
    <div className="flex flex-col w-full justify-center  items-center p-0 m-0">
      <Navbar />
      <Routes className='flex items-center'>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />

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
