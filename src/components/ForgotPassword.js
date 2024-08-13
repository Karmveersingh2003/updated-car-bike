// import { sendPasswordResetEmail } from "firebase/auth";
// import React from "react";
// import { database } from "./firebase";
// import { useNavigate } from "react-router-dom";
// import "./Forgot.css"

// function ForgotPassword(){
//     const history = useNavigate();

//     const handleSubmit = async(e)=>{
//         e.preventDefault()
//         const emalVal = e.target.email.value;
//         sendPasswordResetEmail(database,emalVal).then(data=>{
//             alert("Check your gmail")
//             history("/")
//         }).catch(err=>{
//             alert(err.code)
//         })
//     }
//     return(
       
//         <div id='login-sing'>
//         <div className='wrapperrr'>
        
        
//         <h1>Forgot Password</h1>
//         <h5>Enter Registered Email Address </h5>        
//              <form onSubmit={(e)=>handleSubmit(e)}>
//              <div id="Forgot-password">
//                  <input name="email" placeholder="Enter Your Email"/><br/><br/></div>
//                  <button>Reset</button>
//                  </form>
//         </div>
//       </div>
//     )
// }
// export default ForgotPassword;





import React, { useState } from "react";
import { auth } from "./firebase"; // Make sure to import only what you need
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import "./Forgot.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent!", {
        position: "top-center",
      });
    } catch (error) {
      toast.error("Error: " + error.message, {
        position: "top-center",
      });
    }
  };

  return (
    <div id='login-sing'>
        <div className='wrapperrr'>
    <div className="forgot-password">
      <h2>Reset Password</h2>
      <input id="placeholder_reset_password"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button onClick={handleResetPassword}>Send Reset Email</button>
    </div>
    </div>
    </div>
  );
}

export default ForgotPassword;

