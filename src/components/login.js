import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import SignInwithGoogle from "./signInWIthGoogle";
import { FaUser, FaLock } from "react-icons/fa";
import "./login.css"
import Navbar from "./navbar/Navbar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/profile";
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
    <>
    <Navbar/>
    <div id='login-sing'>
      <div className='wrapperr'>
        <form onSubmit={handleSubmit}>
          <h3>Login</h3>


          <div className="input-box">

            <input type="text" placeholder='Username or Email address' onChange={(e) => setEmail(e.target.value)} required value={email} />
            <FaUser className="icon" />
          </div>


          <div className="input-box">
            <input type="password" placeholder="Enter password" required value={password}
              onChange={(e) => setPassword(e.target.value)} />
            <FaLock className="icon" />

          </div>
          <div className="register-link">
            <div>
              <label>
                <input type="checkbox" />
                Remember Me
              </label>
            </div>
            <p><a href="/reset">Lost Your Password?</a></p>

          </div>

          <button type="submit">Login</button>



          <SignInwithGoogle />

          <div id="create_an_acc">
            <p>Don`t have an account? <a href="/register">Create Account</a></p>
          </div>
         
        </form>
      </div>
    </div>


    </>

  );
}

export default Login;










