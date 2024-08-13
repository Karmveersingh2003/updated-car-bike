import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { FaUser ,FaLock} from "react-icons/fa";
import "./register.css"
import Navbar from "./navbar/Navbar";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo:""
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
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
    <form onSubmit={handleRegister}>
      <h3>Register</h3>

     
         <div className="input-box">
                        <input type="text" placeholder="First name" onChange={(e) => setFname(e.target.value)} required />
                        
                     </div>
     


        <div className="input-box">
                         <input type="email"  placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}  required  />                   
                     </div>

      
        <div className="input-box">
                         <input type="password" placeholder="Enter password"  onChange={(e) => setPassword(e.target.value)} required />
                         <FaLock className="icon" />

                     </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      
      <div id="have_account">
                         <p>Already have an account? <a href="/login">Login</a></p>
</div>
</form>
      </div>
      </div>
    
      </>
  );
}
export default Register;
