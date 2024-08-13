import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, fetchSignInMethodsForEmail, linkWithCredential, EmailAuthProvider } from "firebase/auth";
import { auth, db } from "./firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import "./sign-in-google.css";
import React from 'react';

function SignInwithGoogle() {
  async function googleLogin() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          photo: user.photoURL,
          lastName: "",
        });
        toast.success("User logged in Successfully", {
          position: "top-center",
        });
        window.location.href = "/profile";
      }
    } catch (error) {
      if (error.code === 'auth/account-exists-with-different-credential') {
        const email = error.customData.email;
        const methods = await fetchSignInMethodsForEmail(auth, email);
        if (methods.includes(EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)) {
          const password = prompt(`An account already exists with the email ${email}. Please provide the password for this account to link it with your Google account.`);
          const credential = EmailAuthProvider.credential(email, password);
          const result = await signInWithPopup(auth, provider);
          await linkWithCredential(result.user, credential);
          window.location.href = "/profile";
        } else {
          toast.error("An account already exists with the email address but with a different sign-in method.", {
            position: "top-center",
          });
        }
      } else {
        toast.error("Error during login: " + error.message, {
          position: "top-center",
        });
      }
    }
  }

  async function facebookLogin() {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          photo: user.photoURL,
          lastName: "",
        });
        toast.success("User logged in Successfully", {
          position: "top-center",
        });
        window.location.href = "/profile";
      }
    } catch (error) {
      if (error.code === 'auth/account-exists-with-different-credential') {
        const email = error.customData.email;
        const methods = await fetchSignInMethodsForEmail(auth, email);
        if (methods.includes(EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)) {
          const password = prompt(`An account already exists with the email ${email}. Please provide the password for this account to link it with your Facebook account.`);
          const credential = EmailAuthProvider.credential(email, password);
          const result = await signInWithPopup(auth, provider);
          await linkWithCredential(result.user, credential);
          window.location.href = "/profile";
        } else {
          toast.error("An account already exists with the email address but with a different sign-in method.", {
            position: "top-center",
          });
        }
      } else {
        toast.error("Error during login: " + error.message, {
          position: "top-center",
        });
      }
    }
  }

  return (
    <div>
      <div className="separator">
        <div className="line"></div>
        <h3><span className="or">or</span></h3>
        <div className="line"></div>
      </div>
      
      <div
        style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        onClick={googleLogin}
      >
        <img src={require("../google.png")} width={"70%"} alt="Google Sign In" />
      </div>

      <div id="or_facebook"><h3>or</h3></div>

      <div
        style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        onClick={facebookLogin}
      >
        <img src={require("../Facebook.png")} width={"70%"} alt="Facebook Sign In" />
      </div>
    </div>
  );
}

export default SignInwithGoogle;
