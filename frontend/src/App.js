// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import MyCarousel from './components/Carousel';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contactus from './components/Contactus';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Product from './components/Product';
import AdminRootLayout from './components/Admin/adminRootLayout';
import AdminPage from './components/Admin/adminPage';
import AddEvent from './components/Admin/addEvent';
import Mbody from './components/Mbody';
import Community from './components/Community';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MyCarousel />} />
          <Route path="/Home" element={<MyCarousel />} />
          <Route path="/Advocacy" element={<Mbody />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/contactUs" element={<Contactus />} />
          <Route path="/SignUp" element={<Signup />} />
          <Route path="/SignIn" element={<Signin />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Community" element={<Community />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
