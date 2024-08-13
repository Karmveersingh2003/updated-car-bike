import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./detailing.css"
import { FaCarSide, FaCar, FaRoad, FaHistory, FaHashtag, FaClipboardList } from "react-icons/fa";
import { GiGearStick } from "react-icons/gi";
import { AiTwotoneSetting } from "react-icons/ai";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { SiTicktick } from "react-icons/si";
import { LiaPhoneAltSolid } from "react-icons/lia";
import { GiCarKey } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { PiEngineFill } from "react-icons/pi";
import { IoLocation } from "react-icons/io5";
import Zen from "../Home/zen.jpg"
import Zen1 from "./zen1.jpg"
import Zen2 from "./zen2.jpg"
import Zen3 from "./zen3.jpg"
import Zen4 from "./zen4.jpg"
import Zen5 from "./zen-interior.jpg"
import Flatbush from './flatbush.png'
import Chatwhatsapp from './chatwhtasapp.png'
import Chatwhatsapp1 from './chatwhtasapp1.png'
import Navbar from '../navbar/Navbar';
import { useParams, Link } from 'react-router-dom';

const carData = [
    {
      name: 'New Lamborghini Urus',
      originalPrice: '$30,000',
      discountPrice: '$27,000',
      imgSrc: 'https://www.v3cars.com/media/model-imgs/1655868840-Mahindra%20Bolero%20Front.webp',
    },
    {
      name: 'New 2021 BMW X7',
      originalPrice: '$27,000',
      discountPrice: '$35,000',
      imgSrc: 'https://e1.pxfuel.com/desktop-wallpaper/492/207/desktop-wallpaper-cars-range-rover-autobiography-black-design-pack-uk-range-rover-autobiography.jpg',
    },
    {
      name: 'Certified Used 2021 BMW M5',
      originalPrice: '$27,000',
      discountPrice: '$25,500',
      imgSrc: 'https://w0.peakpx.com/wallpaper/323/807/HD-wallpaper-2022-audi-q7-45-tfsi-quattro-black-pack.jpg',
    },
    {
      name: 'New Bentley Flying Spur',
      originalPrice: '$340,000',
      discountPrice: '$305,700',
      imgSrc: 'https://wallpaper.dog/large/20515176.jpg',
    },
  ];
  export default function Detailing() {
    const [car, setCars] = useState([]);
    const { car_id } = useParams();
  
    const getCarsHandler = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/cars/${car_id}`);
        console.log(response);
        setCars(response.data.cars);
      } catch (error) {
        console.error('Error fetching the cars data:', error);
      }
    };
  
    useEffect(() => {
      getCarsHandler();
    }, [car_id]);
      
    return (
        <>
        <Navbar/>

            <div id='Detailing_main'>
                <div id='new_flatbush_flex'>
                    <div>
      <div id='Detailing_main'>
        <div id='new_flatbush_flex'>
        
            <div key={car._id} id='new_flatbush_flex'>
            
                <div>
                  <div id='detailing_btn_flex'>
                    <div id="detailing_header">
                      <p>NEW {car.year}</p>
                      <h1>{car.name}</h1>
                    </div>
                  </div>
                  <div id='main_img_car_big'>
                    <img src={car.mainImage} alt={car.name} />
                  </div>
                  <div id='car_img_gridss'>
                    <div className='car_img_grid'>
                      <img src={car.image1} alt="car image 1" />
                    </div>
                    <div className='car_img_grid'>
                      <img src={car.image2} alt="car image 2" />
                    </div>
                    <div className='car_img_grid'>
                      <img src={car.image3} alt="car image 3" />
                    </div>
                    <div className='car_img_grid'>
                      <img src={car.image4} alt="car image 4" />
                    </div>
                    <div className='car_img_grid'>
                      <img src={car.image5} alt="car image 5" />
                    </div>
                  </div>
                </div>
           
            </div>
          
        </div>
      </div>
    
           
                <Link  to={`/api/cars/getcars/${car._id}`}>
                <div id='specifications_flex' key={`specifications-${car._id}`}>
                    <div>
                        <div id="main_Details_specifications">
                            <div><FaCarSide color='rgb(81, 168, 30)' size={25} /></div>
                            <div className='Detailing_specifications_p'><p>Body</p></div>
                            <div className='Detailing_specifications_h6'><h6>{car.bodyType}</h6></div>
                        </div>
                        <div id="main_Details_specifications">
                            <div><GiGearStick color='rgb(81, 168, 30)' size={25} /></div>
                            <div className='Detailing_specifications_p'><p>Transm..</p></div>
                            <div className='Detailing_specifications_h6'><h6>{car.transmission}</h6></div>
                        </div>
                        <div id="main_Details_specifications">
                            <div><FaRoad color='rgb(81, 168, 30)' size={25} /></div>
                            <div className='Detailing_specifications_p'><p>Year</p></div>
                            <div className='Detailing_specifications_h6'><h6>{car.year}</h6></div>
                        </div>
                        <div id="main_Details_specifications">
                            <div><FaCircleHalfStroke color='rgb(81, 168, 30)' size={25} /></div>
                            <div className='Detailing_specifications_p'><p>Exterior...</p></div>
                            <div className='Detailing_specifications_h6'><h6>{car.exterior}</h6></div>
                        </div>
                        <div id="main_Details_specifications">
                            <div><FaHistory color='rgb(81, 168, 30)' size={25} /></div>
                            <div className='Detailing_specifications_p'><p>History</p></div>
                            <div className='Detailing_specifications_h6'><h6>{car.history}</h6></div>
                        </div>
                    </div>
                    <div>
                        <div id="main_Details_specifications">
                            <div><FaCar color='rgb(81, 168, 30)' size={25} /></div>
                            <div className='Detailing_specifications_p'><p>Make</p></div>
                            <div className='Detailing_specifications_h6'><h6>{car.make}</h6></div>
                        </div>
                        <div id="main_Details_specifications">
                            <div><BsFillFuelPumpFill color='rgb(81, 168, 30)' size={25} /></div>
                            <div className='Detailing_specifications_p'><p>Fuel Type</p></div>
                            <div className='Detailing_specifications_h6'><h6>{car.fuelType}</h6></div>
                        </div>
                        <div id="main_Details_specifications">
                            <div><FaRoad color='rgb(81, 168, 30)' size={25} /></div>
                            <div className='Detailing_specifications_p'><p>Mileage</p></div>
                            <div className='Detailing_specifications_h6'><h6>{car.mileage} mi</h6></div>
                        </div>
                        <div id="main_Details_specifications">
                            <div><FaCircleHalfStroke color='rgb(81, 168, 30)' size={25} /></div>
                            <div className='Detailing_specifications_p'><p>Interior...</p></div>
                            <div className='Detailing_specifications_h6'><h6>{car.interior}</h6></div>
                        </div>
                        <div id="main_Details_specifications">
                            <div><FaHashtag color='rgb(81, 168, 30)' size={25} /></div>
                            <div className='Detailing_specifications_p'><p>Stock Id</p></div>
                            <div className='Detailing_specifications_h6'><h6>{car.stockId}</h6></div>
                        </div>
                    </div>
                    <div>
                        <div id="main_Details_specifications">
                            <div><FaCarSide color='rgb(81, 168, 30)' size={25} /></div>
                            <div className='Detailing_specifications_p'><p>Model</p></div>
                            <div className='Detailing_specifications_h6'><h6>{car.model}</h6></div>
                        </div>
                        <div id="main_Details_specifications">
                            <div><GiCarKey color='rgb(81, 168, 30)' size={25} /></div>
                            <div className='Detailing_specifications_p'><p>Register...</p></div>
                            <div className='Detailing_specifications_h6'><h6>{car.register}</h6></div>
                        </div>
                        <div id="main_Details_specifications">
                            <div><PiEngineFill color='rgb(81, 168, 30)' size={25} /></div>
                            <div className='Detailing_specifications_p'><p>Engine</p></div>
                            <div className='Detailing_specifications_h6'><h6>{car.engine}</h6></div>
                        </div>
                        <div id="main_Details_specifications">
                            <div><AiTwotoneSetting color='rgb(81, 168, 30)' size={25} /></div>
                            <div className='Detailing_specifications_p'><p>Drive</p></div>
                            <div className='Detailing_specifications_h6'><h6>{car.drive}</h6></div>
                        </div>
                        <div id="main_Details_specifications">
                            <div><FaClipboardList color='rgb(81, 168, 30)' size={25} /></div>
                            <div className='Detailing_specifications_p'><p>VIN</p></div>
                            <div className='Detailing_specifications_h6'><h6>{car.vin}</h6></div>
                        </div>
                    </div>
                </div>
                </Link>
        

                        <div id='Feature_h3_heading'><h3>FEATURES</h3></div>
                        <div id='features_main_flex'>
                            <div>
                                <h4>Comfort</h4>
                                <div id="main_features_specifications">
                                    <div><SiTicktick color='rgb(81, 168, 30)' size={25} /></div>
                                    <div className='feature_specifications_p'><p>AC:Front</p></div>
                                </div>
                                <div id="main_features_specifications">
                                    <div><SiTicktick color='rgb(81, 168, 30)' size={25} /></div>
                                    <div className='feature_specifications_p'><p>Backup Camera</p></div>
                                </div>
                                <div id="main_features_specifications">
                                    <div><SiTicktick color='rgb(81, 168, 30)' size={25} /></div>
                                    <div className='feature_specifications_p'><p>Curise Control</p></div>
                                </div>
                                <div id="main_features_specifications">
                                    <div><SiTicktick color='rgb(81, 168, 30)' size={25} /></div>
                                    <div className='feature_specifications_p'><p>Navigation</p></div>
                                </div>
                            </div>
                            <div>
                                <h4>ENTERTAINMENT</h4>
                                <div id="main_features_specifications">
                                    <div><SiTicktick color='rgb(81, 168, 30)' size={25} /></div>
                                    <div className='feature_specifications_p'><p>AC:Front</p></div>
                                </div>
                                <div id="main_features_specifications">
                                    <div><SiTicktick color='rgb(81, 168, 30)' size={25} /></div>
                                    <div className='feature_specifications_p'><p>Backup Camera</p></div>
                                </div>
                                <div id="main_features_specifications">
                                    <div><SiTicktick color='rgb(81, 168, 30)' size={25} /></div>
                                    <div className='feature_specifications_p'><p>Curise Control</p></div>
                                </div>
                                <div id="main_features_specifications">
                                    <div><SiTicktick color='rgb(81, 168, 30)' size={25} /></div>
                                    <div className='feature_specifications_p'><p>Navigation</p></div>
                                </div>
                            </div>
                            <div>
                                <h4>Saftey</h4>
                                <div id="main_features_specifications">
                                    <div><SiTicktick color='rgb(81, 168, 30)' size={25} /></div>
                                    <div className='feature_specifications_p'><p>AC:Front</p></div>
                                </div>                                                      
                                <div id="main_features_specifications">
                                    <div><SiTicktick color='rgb(81, 168, 30)' size={25} /></div>
                                    <div className='feature_specifications_p'><p>Backup Camera</p></div>
                                </div>
                                <div id="main_features_specifications">
                                    <div><SiTicktick color='rgb(81, 168, 30)' size={25} /></div>
                                    <div className='feature_specifications_p'><p>Curise Control</p></div>
                                </div>
                                <div id="main_features_specifications">
                                    <div><SiTicktick color='rgb(81, 168, 30)' size={25} /></div>
                                    <div className='feature_specifications_p'><p>Navigation</p></div>
                                </div>
                            </div>
                            <div>
                                <h4>SEATS</h4>
                                <div id="main_features_specifications">
                                    <div><SiTicktick color='rgb(81, 168, 30)' size={25} /></div>
                                    <div className='feature_specifications_p'><p>AC:Front</p></div>
                                </div>
                                <div id="main_features_specifications">
                                    <div><SiTicktick color='rgb(81, 168, 30)' size={25} /></div>
                                    <div className='feature_specifications_p'><p>Backup Camera</p></div>
                                </div>
                                <div id="main_features_specifications">
                                    <div><SiTicktick color='rgb(81, 168, 30)' size={25} /></div>
                                    <div className='feature_specifications_p'><p>Curise Control</p></div>
                                </div>
                                <div id="main_features_specifications">
                                    <div><SiTicktick color='rgb(81, 168, 30)' size={25} /></div>
                                    <div className='feature_specifications_p'><p>Navigation</p></div>
                                </div>
                            </div>
                        </div>
                        <div id='seller_h3_heading'>
                            <h3>SELLER`S Notes</h3>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore inventore tenetur, dolorem neque impedit molestias maiores ullam repellendus similique, fuga est unde ab. Quod quos officiis dolorem quae atque quas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sit error, itaque autem excepturi consectetur asperiores rem amet quo voluptatum sint provident nostrum omnis nobis, quis ullam. Architecto, expedita adipisci!</p>
                        </div>

                    </div>


                    <div>
                        <div id='seller_h3_heading'>
                            <h3>Flat Bush</h3></div>
                        <div id='flat_bush_logo'> <img src={Flatbush} /></div>
                        <div id='mobile_num'>
                            <LiaPhoneAltSolid color='rgb(81, 168, 30)' size={25} />
                            <h6>(7014018057)</h6>
                        </div>

                        <div id='chat_whastapp'>
                            <img src={Chatwhatsapp} />
                        </div>
                        <div id='detailing_location'>
                            <div>
                                <IoLocation color='rgb(81, 168, 30)' size={25} />
                            </div>
                            <div>
                                <p> Cars`s Auto Sales, Grand Rapids, Itascsa Country ,MN, United States</p>
                            </div>
                        </div>
                        <div>
                            <div style={{ height: "100vh", width: "100%" }}>
                                <iframe
                                    width="300px"
                                    height="300px"
                                    style={{ border: 0 }}
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.7369190867744!2d77.06218287495143!3d28.487468490654322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01267c46dcab%3A0x4856cc026f55164b!2sAarvy%20Technologies!5e0!3m2!1sen!2sin!4v1719808881516!5m2!1sen!2sin"
                                    allowFullScreen=""
                                    aria-hidden="false"
                                    tabIndex="0"
                                ></iframe>
                                <div id='similar_things_heading'>
                                    <h4>SIMILAR LISTING</h4>
                                </div>
                                
                                <div id='Similar_listing_img'>
                                    <div>
                                        <img src={Zen} height={100} width={100} />
                                    </div>
                                    <div id='similar_listing_cardetails'>
                                        <h7>NEW ZEN xls</h7>
                                        <p>KARAMVEER</p>
                                        <div id='similar_listing_buttondetails'>
                                            <button>27 000</button>
                                            <div id='similar_listing_buttondetails' >
                                                <GiGearStick size={25} /><p>Manual</p>
                                            </div>
                                        </div>
                                        </div>
                                </div>
                                <hr/>
                                <div id='Similar_listing_img'>
                                    <div>
                                        <img src={Zen} height={100} width={100} />
                                    </div>
                                    <div id='similar_listing_cardetails'>
                                        <h7>NEW ZEN xls</h7>
                                        <p>KARAMVEER</p>
                                        <div id='similar_listing_buttondetails'>
                                            <button>27 000</button>
                                            <div id='similar_listing_buttondetails' >
                                                <GiGearStick size={25} /><p>Manual</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    <hr/>
                                <div id='Similar_listing_img'>
                                    <div>
                                        <img src={Zen} height={100} width={100} />
                                    </div>
                                    <div id='similar_listing_cardetails'>
                                        <h7>NEW ZEN xls</h7>
                                        <p>KARAMVEER</p>
                                        <div id='similar_listing_buttondetails'>
                                            <button>27 000</button>
                                            <div id='similar_listing_buttondetails' >
                                                <GiGearStick size={25} /><p>Manual</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div id='lowerbush_message_flex'>
                    <div id='lower_flat_bush'>
                        <div id='seller_shadow'>
                            <div id='seller_h3_heading'>
                                <h3>Flat Bush</h3></div>
                            <div id='flat_bush_logo'> <img src={Flatbush} /></div>
                            <div id='mobile_num'>
                                <LiaPhoneAltSolid color='rgb(81, 168, 30)' size={25} />
                                <h6>(7014018057)</h6>
                            </div>
                            <div>
                                <div id='chat_whastapp1'>
                                    <img src={Chatwhatsapp1} />
                                </div>
                                <div id='detailing_location'>
                                    <div>
                                        <IoLocation color='rgb(81, 168, 30)' size={20} />
                                    </div>
                                    <div id='mn_united_heading'>
                                        <p>MN, United States</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div >
                        <div id='message_to_dealer_heading' >
                            <h3>MESSAGE TO DEALER</h3>
                            <textarea id='message_to_dealer' placeholder='Your message' />
                        </div>
                        <div id='name_email_phone'>
                            <div>NAME<div><input placeholder='Your Name...'></input></div></div>
                            <div>EMAIL<div><input placeholder='Your EMAIL...'></input></div></div>
                            <div>PHONE <div><input placeholder='Your PHONE...'></input></div></div>
                        </div>
                        <div id='accept_policies'>
                            <input type='checkbox'></input>
                            <h7>I Accept the </h7>
                            <p>privacy policies</p>
                        </div>
                        <button id="send_message_btn_detailing">SEND MESSAGE</button>
                    </div>
                </div>
        
                <div className="car-listing">
      <div className="search-results">← SEARCH RESULTS</div>
      <div className="car-cards">
        {carData.map((car, index) => (
          <div className="car-card" key={index}>
            <img src={car.imgSrc} alt={car.name} className="car-image" />
            <div className="car-info">
              <h3>{car.name}</h3>
              {car.originalPrice && <p className="original-price">{car.originalPrice}</p>}
              <p className="discount-price">{car.discountPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </div> 


            </div>
        </>
    )
}