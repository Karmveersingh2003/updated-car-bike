import React from 'react'
import Logo from "../navbar/Logo1.png"
import "./footer.css"
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare ,FaInstagram ,FaPinterest,FaYoutube,FaBehance} from "react-icons/fa";

export default function Footer() {
  return (
 <>
 <div id='footer'>
 <div id='footer_main'>
  <div id='footer_logo'>
    <img src={Logo} />
  </div>

  <div id='footer_lines'>
   <h3> lines </h3>
  </div>

  <div id='showroom_location'>
    <h5>
    :SHOWROOM LOCATION:</h5>  
    <h7>32 Market ST.128,Deeja Town,Florida,CA 12345</h7>
    </div>

    <div id='footer_info'>

      <div className='information_footer'>PHONE:+91-7014018057</div>
    <div className='information_footer'>FAX:+91-7014018057</div>
    <div className='information_footer'>Email:info@yoursite.com</div>
    <div className='information_footer'>Hours:Mon-Fri::9am-6pm</div>
    
    </div>

<div id='icon_footer'>
    <div id="social-icons">
  <div id="social-icon"> <FaInstagram /></div>
  <div id="social-icon"> <BsTwitterX /></div>
  <div id="social-icon"><FaFacebookSquare /> </div>
  <div id="social-icon"> <FaPinterest /></div>
  <div id="social-icon"><FaYoutube /> </div>
  <div id="social-icon"> <FaBehance /></div>
</div>
</div>

 </div>
 </div>
 </>
  )
}
