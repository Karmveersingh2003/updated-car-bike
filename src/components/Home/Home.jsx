import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./home.css";
import { GiGearStick } from "react-icons/gi";
import { FaGasPump, FaRoad } from "react-icons/fa6";
import Speedmeter from "./speedmeter.png"
import Calendra from "./calendra.png"
import Steering from "./Steering.png"
import Acura from "./acura.png"
import Bentley from "./bentley.png"
import Bmw from "./bmw.png"
import Chevrolet from "./chevrolet.png"
import Ford from "./ford.png"
import Honda from "./honda.png"
import Hyundai from "./hyundai.png"
import Kia from "./kia.png"
import Minivans from "./minivans.png"
import Pickup from "./pickup.png"
import Sedan from "./sedan.png"
import Sports from "./sports.png"
import Suv from "./suv.jpg"
import Convertible from "./convertible.jpg"
import Hackback from "./hatchback.png"
import Coupe from "./coupe.png"
import Zen from "./zen.jpg"
import Thar from "./thar.jpg"
import Scorpio from "./Scorpio.jpg"
import Fortuner from "./fortuner.jpeg"
import safari from './safari.jpg'
import Rangerover from './range rover.jpg'
import Compare from "./home_compare.png"
import Lowprice from "./low_price.gif"
import Verified from "./verified_gif.gif"
import Car from "./car_gif.gif"
import Deposite from "./deposit.gif"
import Customer from "./customer.gif"
import Wellmaintain from "./WellMaintained.gif"
import bg_instacomment from "./bg_instacomment.png"
import town from "./town-473.gif"
import Navbar from '../navbar/Navbar';

export default function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('https://updated-backendcarbike.onrender.com/api/cars')
      .then(response => {
        console.log(response.data); // Log the fetched data
        setCars(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the car data!', error);
      });
  }, []);

  const data = [
    {
      id: 1,
      image:
        'https://sukuto.com/images/testimonial_1.png',
    },
    {
      id: 2,
      image:
        'https://sukuto.com/images/testimonial_1.png',
    },
    {
      id: 3,
      image:
        'https://sukuto.com/images/testimonial_1.png',
    },
    {
      id: 4,
      image:
        'https://sukuto.com/images/testimonial_1.png',
    },
  ];

  const [people, setPeople] = React.useState(data)
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > people.length - 1) {
      setIndex(0)
    }
  }, [index, people])

  React.useEffect(() => {
    let setIntervalId = setInterval(() => {
      setIndex(index + 1)
    }, 3000)
    return (
      () => clearInterval(setIntervalId)
    )
  }, [index])
  return (
    <>
    <Navbar/>
      <div id='main_home'>
      
        <div id='compare_img_home'>
          <img src={Compare} />
        </div>

        <div id='we_believe_homeheading'>
          <h1>We Believe in<h1>Transparency</h1>
          </h1>
        </div>
        <div id='homecard_flex_we_believe'>
          <div className='we_believe_home_card'>
            <img src={Lowprice} />
            <h5>Lowest Prices</h5>
            <p>Discover Unbeatable Rates:</p>
            <p>Rent with us at the lowest price across the Internet!</p>
          </div>


          <div className='we_believe_home_card'>
            <img src={Car} />
            <h5>Wide Range of Fleet</h5>
            <p>Unleash your adventure:</p>
            <p>Explore with our wide Range of Fleet</p>
          </div>
          <div className='we_believe_home_card'>
            <img src={Verified} />
            <h5>Verified Partners</h5>
            <p>Discover Unbeatable Rates:</p>
            <p>Our verified Partners Deliver Premier Rental Experiences!</p>
          </div>
        </div>

        <div id='homecard_flex_we_believe'>
          <div className='we_believe_home_card'>
            <img src={Deposite} />
            <h5>Security Deposit Safety</h5>
            <p>Ensuring Peace of Mind:</p>
            <p>our Deposit is in Safe Hands with Us. Rent with Confidence for a Safe and Secure Experience!</p>
          </div>

          <div className='we_believe_home_card'>
            <img src={Customer} />
            <h5>Customer Support</h5>
            <p>Your satisfaction is our priority:</p>
            <p>Experience hassle-free assistance from our top-notch customer support!</p>
          </div>

          <div className='we_believe_home_card'>
            <img src={Wellmaintain} />
            <h5>Well Maintained Vehicles</h5>
            <p>Unlock the Adventure:</p>
            <p>Discover Well-Maintained & Experience the Joy of Riding Impeccably Maintained Vehicles!</p>
          </div>
        </div>

        <div id='flex_car_gif_home'>
          <div id='text_car_gif_home'>
            <h4>Adventure awaits; the world is yours to explore.
           </h4>  <p>Travel far, live fully.</p> 
          </div>
          <div id='car_gif_home'>
            <img src={town} />
          </div>
        </div>

        {/* Browse by make */}
        <div id='main_browse_by_make'>
          <div id='browse_by'>
            <h1>Browse by </h1>
          </div>
          <div id='make_h1'>
            <h1>Make</h1>
          </div>
        </div>

        <div id='car_home_logos'>

          <div className="home_car-icon"><img src={Acura} /><h6>Acura</h6></div>
          <div className="home_car-icon"><img src={Bentley} /><h6>Bentley</h6></div>
          <div className="home_car-icon"><img src={Bmw} /><h6>Bmw</h6></div>
          <div className="home_car-icon"><img src={Chevrolet} /><h6>Chevrolet</h6></div>
          <div className="home_car-icon"><img src={Convertible} /><h6>Convertible</h6></div>
          <div className="home_car-icon"><img src={Minivans} /><h6>Minivans</h6></div>
          <div className="home_car-icon"><img src={Hackback} /><h6>Hackback</h6></div>
          <div className="home_car-icon"><img src={Sedan} /><h6>Sedan</h6></div>
        </div>
        <div id='car_home_logos2'>
          <div className="home_car-icon"><img src={Ford} /><h6>Ford</h6></div>
          <div className="home_car-icon"><img src={Honda} /><h6>Honda</h6></div>
          <div className="home_car-icon"><img src={Hyundai} /><h6>Hyundai</h6></div>
          <div className="home_car-icon"><img src={Kia} /><h6>Kia</h6></div>
          <div className="home_car-icon"><img src={Pickup} /><h6>Pickup</h6></div>
          <div className="home_car-icon"><img src={Sports} /><h6>Sports</h6></div>
          <div className="home_car-icon"><img src={Suv} /><h6>Suv</h6></div>
          <div className="home_car-icon"><img src={Coupe} /><h6>Coupe</h6></div>
        </div>

        {/* new used car */}

        <div id='main_new_used'>
          <div id='heading_used_cars'>
            <h1>New/Used Cars</h1>
          </div>
          <div id='main_items'>
            <div className='all_items'>Featured Items</div>
            <div className='all_items'>Recent Items</div>
            <div className='all_items'>Popular Items</div>
          </div>
        </div>

        <div className="car-listings">
        
          {cars.map(car => (
            
            <div key={car._id} className="car-card special" >
          
              <Link  to={`/api/cars/${car._id}`} id='link_cardetails_back_home'>
              <img src={car.mainImage} />
              
              <div className="car-details">
                <h3>{car.name}</h3>
                <p className="price"><span className="old-price"></span> Rent per hour: {car.rentPerHour}</p>
                <div id='car_card_manual-p'>
                  <p>{car.transmission}</p><div><GiGearStick /></div>
                  <p>{car.fuelType}</p><div><FaGasPump /></div>
                  <p>{car.mileage} mi</p><div><FaRoad /></div>
                </div>
              </div>
              </Link>
             
            </div>
          ))}
        
        </div>
        
        {/* 
        <a id='detaling_link' href='/detailing'><div class="car-listings">
          <div class="car-card hot-offer">
            <img src={Zen} />
            <div class="car-details">
              <h3>Certified Used 2021 Zen xls</h3>
              <p class="price"><span class="old-price">$27,000</span> $25,500</p>
              <div id='car_card_manual-p'>
                <p>Manual</p><div><GiGearStick /></div>
                <p>48/100</p><div><FaGasPump /></div>
                <p>50000 mi</p><div><FaRoad /></div>
              </div>
            </div>
          </div>

          <div class="car-card special">
            <img src={Fortuner} />
            <div class="car-details">
              <h3>Certified Used 2021 Fortuner</h3>
              <p class="price"><span class="old-price">$27,000</span> $25,500</p>
              <div id='car_card_manual-p'>
                <p>Manual</p><div><GiGearStick /></div>
                <p>18/100</p><div><FaGasPump /></div>
                <p>50000 mi</p><div><FaRoad /></div>
              </div>
            </div>
          </div>

          <div class="car-card special">
            <img src={Scorpio} />
            <div class="car-details">
              <h3>Certified Used 2021 scorpio</h3>
              <p class="price"><span class="old-price">$27,000</span> $25,500</p>
              <div id='car_card_manual-p'>
                <p>Manual</p><div><GiGearStick /></div>
                <p>18/100</p><div><FaGasPump /></div>
                <p>50000 mi</p><div><FaRoad /></div>
              </div>
            </div>
          </div>

          <div class="car-card special">
            <img src={safari} />
            <div class="car-details">
              <h3>Certified Used 2021 Safari</h3>
              <p class="price"><span class="old-price">$27,000</span> $25,500</p>
              <div id='car_card_manual-p'>
                <p>Manual</p><div><GiGearStick /></div>
                <p>18/100</p><div><FaGasPump /></div>
                <p>50000 mi</p><div><FaRoad /></div>
              </div>
            </div>
          </div>


          <div class="car-card hot-offer">
            <img src={Zen} />
            <div class="car-details">
              <h3>Certified Used 2021 Zen xls</h3>
              <p class="price"><span class="old-price">$27,000</span> $25,500</p>
              <div id='car_card_manual-p'>
                <p>Manual</p><div><GiGearStick /></div>
                <p>48/100</p><div><FaGasPump /></div>
                <p>50000 mi</p><div><FaRoad /></div>
              </div>
            </div>
          </div>


          <div class="car-card special">
            <img src={Thar} />
            <div class="car-details">
              <h3>Certified Used 2021 Safari</h3>
              <p class="price"><span class="old-price">$27,000</span> $25,500</p>
              <div id='car_card_manual-p'>
                <p>Manual</p><div><GiGearStick /></div>
                <p>18/100</p><div><FaGasPump /></div>
                <p>50000 mi</p><div><FaRoad /></div>
              </div>
            </div>
          </div>

<div class="car-card hot-offer">
            <img src={Zen} />
            <div class="car-details">
              <h3>Certified Used 2021 Zen xls</h3>
              <p class="price"><span class="old-price">$27,000</span> $25,500</p>
              <div id='car_card_manual-p'>
                <p>Manual</p><div><GiGearStick /></div>
                <p>48/100</p><div><FaGasPump /></div>
                <p>50000 mi</p><div><FaRoad /></div>
              </div>
            </div>
          </div>

          <div class="car-card special">
            <img src={Rangerover} />
            <div class="car-details">
              <h3>Certified Used 2021 Safari</h3>
              <p class="price"><span class="old-price">$27,000</span> $25,500</p>
              <div id='car_card_manual-p'>
                <p>Manual</p><div><GiGearStick /></div>
                <p>18/100</p><div><FaGasPump /></div>
                <p>50000 mi</p><div><FaRoad /></div>
              </div>
            </div>
          </div>
          <button id="show_all_homebtn">SHOW ALL</button>
          </div></a> */}


        <section className="customer-reviews">
          <h2>Customer Reviews</h2>
          <div className="review-content">
            <p className="quote-icon">”</p>
            <p className="review-text">
              Do you need a car rental theme that is not too flashy and does not require much time to set up?
              If you do, then the most popular content management system – WordPress, because what you don’t want
              is another custom programming job. But now there are thousands of themes out there and they all look
              pretty much the same anyway. So how do you make an informed decision?
            </p>
            <div className="reviewer">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUN6dzs1op6vqCNYCd_oaLK2YavwHd5DalNw&s" />
            </div>
            <p className="reviewer-name">Franklin Stephan</p>
          </div>
        </section>

        <div id='fast_easy_book'>
          <div id='Fast_easy_title'>
            <img width="80" height="80" src={Speedmeter} />
            <h3>Fast & Easy Booking</h3>
            <p>Semper aibers vestibulum fringil voluptate velit esse cillum Lorem ipsum dolor sit conse incididunt ut labore et dolore.</p>

          </div>
          <div id='many_pickup_title'>
            <img width="130" height="80" src={Steering} />
            <h3>Many Pickup Locations</h3>
            <p>Semper aibers vestibulum fringil voluptate velit esse cillum Lorem ipsum dolor sit conse incididunt ut labore et dolore.</p>

          </div>
          <div id='No_booking_title'>
            <img width="80" height="80" src={Calendra} />
            <h3>No Booking Charges</h3>
            <p>Semper aibers vestibulum fringil voluptate velit esse cillum Lorem ipsum dolor sit conse incididunt ut labore et dolore.</p>
          </div>
        </div>

        <div id='discover_the_largest_flex_home'>
          <div id='heading_discover_the_largest_home'>
            <h5>Discover the largest & the most<h4>Trusted</h4> <h5>bike and car rental company.</h5></h5>

            <p>See what our customers say about us.</p>
          </div>

          <div>

            <section className="home_slider_section">
              <section className="home_slider_section-center">
                {people.map((person, personIndex) => {
                  const { id, image } = person

                  let position = "nextSlide"
                  if (personIndex === index) {
                    position = "activeSlide"
                  }
                  if (personIndex === index - 1 ||
                    (index === 0 && personIndex === people.length - 1)) {
                    position = "lastSlide"
                  }
                  return (
                    <article className={position} key={id}>
                      <img src={image} className="home_slider_person-img" />
                    </article>
                  )
                })}

              </section>
            </section>

          </div>

        </div>



        <div id='renting_news_btn'>
          <div className="headerss">
            <h1>Renting Tips</h1>
            <p>Read our latest blog news</p>
          </div>
          <a href="#" className="read-all-news">Read All News</a></div>
        <section className="renting-tips">
          <div className="tip">
            <div className="image-container">
              <img src={Zen} alt="Car Image" />
              <div className="date-badge">
                <span className="day">19</span>
                <span className="month">Oct</span>
              </div>
            </div>
            <div className="content">
              <h2>Kind Creepth Moveth</h2>
              <p>
                Were. Every forth one male man which. Brought won’t divide in. Hath gathering. Have. Open fifth face
                shall land fish kind isn’t let can’t blessed multiply third light, shall from winged, his creature isn’t
                midst said dominion in. Male firmament beginning dominion fourth he place shall.
              </p>
            </div>
          </div>
        </section>

        <section className="renting-tips">
          <div className="tip">
            <div className="image-container">
              <img src={Scorpio} alt="Car Image" />
              <div className="date-badge">
                <span className="day">19</span>
                <span className="month">Oct</span>
              </div>
            </div>
            <div className="content">
              <h2>Kind Creepth Moveth</h2>
              <p>
                Were. Every forth one male man which. Brought won’t divide in. Hath gathering. Have. Open fifth face
                shall land fish kind isn’t let can’t blessed multiply third light, shall from winged, his creature isn’t
                midst said dominion in. Male firmament beginning dominion fourth he place shall.
              </p>
            </div>
          </div>
        </section>

        <section className="renting-tips">
          <div className="tip">
            <div className="image-container">
              <img src={Fortuner} alt="Car Image" />
              <div className="date-badge">
                <span className="day">19</span>
                <span className="month">Oct</span>
              </div>
            </div>
            <div className="content">
              <h2>Kind Creepth Moveth</h2>
              <p>
                Were. Every forth one male man which. Brought won’t divide in. Hath gathering. Have. Open fifth face
                shall land fish kind isn’t let can’t blessed multiply third light, shall from winged, his creature isn’t
                midst said dominion in. Male firmament beginning dominion fourth he place shall.
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
