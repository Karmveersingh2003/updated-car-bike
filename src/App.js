import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./components/profile";
import { useState } from "react";
import { auth } from "./components/firebase";
import ForgotPassword from "./components/ForgotPassword";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import FormComponent from "./components/kyc/FormComponents";
import FirebaseFirestore from "./components/adminform/FirebaseFirestore";
import Form from "./components/form/Form";
import Countrystate from "./components/adminform/Countrystate";
import Adminlogin from "./components/Adminlogin";
import Footer from "./components/Footer/Footer"
import Detailing from "./components/Detailing/Detailing";
import Listing from "./components/listing/Listing";
import Contact from "./components/contact/Contact";
import Getapp from "./components/getapp/Getapp";
import Product from "./components/product/Product";
import About from "./components/AboutUs/AboutUs";







function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <Router>
      {/* <Navbar/>  */}
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
            
              <Route
                path="/" element={user ? <Navigate to="/profile" /> : <Home/>}/>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/reset" element={<ForgotPassword/>} />
              <Route path="/reset" element={<ForgotPassword/>} />
              <Route path="/kyc" element={<FormComponent/>} />
              <Route path="/admin-form" element={<FirebaseFirestore/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/form" element={<Form/>} />
              <Route path="/dropdown" element={<Countrystate/>} />
              <Route path="/adminlogin" element={<Adminlogin/>} />
              <Route path="/detailing" element={<Detailing/>} />
              <Route path="/listing" element={<Listing/>} />
              <Route path="/contact-us" element={<Contact/>} />
              <Route path="/form" element={<Form/>} />
              <Route path="/get-app" element={<Getapp/>} />
              <Route path="/product" element={<Product/>} />
              <Route path="/aboutus" element={<About/>} />
              <Route path="/Navbar" element={<Navbar/>} />
              <Route path="/car_description/:car_id" element={<Detailing/>} />
              <Route path='/api/cars/:car_id' element={<Detailing/>}></Route>
            </Routes>
            <ToastContainer />
          </div>
        </div>
      </div> 
      <Footer/> 
    </Router>
  );
}

export default App;
