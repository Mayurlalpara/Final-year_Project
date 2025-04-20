/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import Login from './components/Login/Login';
import Verify from './pages/Verify/Verify';
import MyOrders from './pages/MyOrders.jsx/MyOrders';
import Search from './pages/Search/Search';
import AboutUs from './components/AboutUs/AboutUs';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Delivery from './components/Delivery/Delivery';
import Menu from './pages/Menu/Menu';
import OrderFood from './pages/OrederFood/OrderFood';
import ChatBot from './components/ChatBot/ChatBot';
//import 'react-toastify/ReactToastify.css'

const App = () => {

const [showLogin,setShowLogin] = useState(false)
const [showChat,setShowChat] = useState(false)

  return (
      <>
      {showLogin?<Login setShowLogin={setShowLogin} />:<></>}
      {showChat?<ChatBot setShowChat={setShowChat} showChat={showChat}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} setShowChat={setShowChat} />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/orderfood' element={<OrderFood/>}/>
          <Route path='/cart' element={<Cart setShowLogin={setShowLogin}/>} />
          <Route path='/order' element={<PlaceOrder/>} />
          <Route path='/verify' element={<Verify/>}/>
          <Route path='/myorders' element={<MyOrders/>} />
          <Route path='/search' element={<Search/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
          <Route path='/service' element={<Delivery/>}/>
        </Routes>
      </div>
      <Footer />
      </>
    
  );
}

export default App;
