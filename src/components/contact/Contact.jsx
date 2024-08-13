import React, { useState } from 'react';
import axios from 'axios';
import './contact.css'
import Girl from './girl_talking.jpg'
import Navbar from '../navbar/Navbar'

const Contact = () => {
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setInputs((values) => ({ ...values, [name]: value }));
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        console.log('You made a request');
        let response = await axios.post("https://updated-backendcarbike.onrender.com/api/contact/addcontact", inputs);
        console.log(response);
      } catch (error) {
        console.error('There was an error!', error);
      }
    };
  
    return (
        <>
        <Navbar/>
            <div id='contact_all_flex'>
                <div >
                    <img src={Girl} height={500} />
                </div>
                <div id='Contact_us' >
                    <h1>CONTACT US</h1>

                    <div className='contact_address_hours_flex'>
                        <h6>Address</h6>
                        <p>:sector 17/18 XYZ 20Technologies gurugram,342001</p>
                    </div>
                    <div className='contact_address_hours_flex'>
                        <h6>Hours</h6>
                        <p>:MON-FRI 9:00am-7:00pm</p>
                    </div>
                    <div className='contact_address_hours_flex'>
                        <h6>Phone</h6>
                        <p>:0291-785469</p>
                    </div>
                    <div className='contact_address_hours_flex'>
                        <h6>Email</h6>
                        <p>:techsupport291@gmail.com</p>
                    </div>
                </div>
            </div>
            <div id='drop_us_map_contact'>
            <form onSubmit={handleSubmit}>
      <div id='Drop_us_div'>
        <h1>DROP US LINE</h1>
        <div id='name_email_phone_contactus'>
          <div>
            <div>
              <input
                placeholder='Name'
                type="text"
                name="name"
                value={inputs.name || ""}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div>
              <input
                placeholder='Email'
                type="text"
                name="email"
                value={inputs.email || ""}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div id='name_email_phone_contactus'>
          <div>
            <div>
              <input
                placeholder='Phone Number'
                type="text"
                name="phone"
                value={inputs.phone || ""}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div>
              <input
                placeholder='Subject'
                type="text"
                name="subject"
                value={inputs.subject || ""}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <textarea
          id='message_to_dealer_contactus'
          type="text"
          name="message"
          value={inputs.message || ""}
          onChange={handleChange}
          placeholder='Message'
        />
        <button id="send_message_btn_contactus" type='submit'>SEND MESSAGE</button>
      </div>
    </form>

                <div>

                    <iframe
                        width="764px"
                        height="550px"
                        style={{ border: 0 }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.7369190867744!2d77.06218287495143!3d28.487468490654322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01267c46dcab%3A0x4856cc026f55164b!2sAarvy%20Technologies!5e0!3m2!1sen!2sin!4v1719808881516!5m2!1sen!2sin"
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    ></iframe>
                </div>

            </div>
        </>
    )
}

export default Contact;