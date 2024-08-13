import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import { FaUser, FaLock } from "react-icons/fa";
import "./login.css"

function Adminlogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/dropdown";
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);

      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div id='login-sing'>
      <div className='wrapperr'>
        <form onSubmit={handleSubmit}>
          <h3>Admin-Login</h3>


          <div className="input-box">

            <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} required value={email} />
            <FaUser className="icon" />
          </div>


          <div className="input-box">
            <input type="password" placeholder="Enter password" required value={password}
              onChange={(e) => setPassword(e.target.value)} />
            <FaLock className="icon" />

          </div>
          <div className="register-link">
            <p><a href="/">User Login</a></p>
          </div>
          
          <button type="submit">Login</button>
          
          


  

        </form>
   
      </div>
    </div>




  );
}

export default Adminlogin;










