import React, { useEffect } from 'react';
import "./aboutus.css";
import Swiper from 'swiper'; 
import './swiperJs/swiper-bundle.min.css';
import shape4 from "./img/shape-4.png";
import shape13 from "./img/shape-13.png";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img13 from "./img/13.jpg";
import img14 from "./img/14.jpg";
import img15 from "./img/15.jpg";
import img16 from "./img/16.jpg";
import chef1 from "./img/1-chef.jpg";
import chef2 from "./img/2-chef.jpg";
import chef3 from "./img/3-chef.jpg";
import chef4 from "./img/4-chef.jpg";
import blog2 from "./img/blog2.png";
import ribbon from "./img/ribbon.png";
import Drinks from "./img/drinks.png";
import { FaFacebook, FaInstagram, FaTwitter, FaStar } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function AboutUs() {
    useEffect(() => {
        let IconMenu = document.querySelector("#openMenu");
        let menu = document.querySelector(".menu");
        let closeResrv = document.querySelector("#closeResrv");
        let btnResrv = document.querySelectorAll(".btnresrv");
        let reservation = document.querySelector("#reservation");
        let header = document.querySelector("#header");

        if (IconMenu) {
            IconMenu.onclick = () => {
                IconMenu.classList.toggle('fa-times');
                menu.classList.toggle('active');
            };
        }

        window.onscroll = function () {
            if (header) {
                if (this.scrollY >= 200) {
                    header.classList.add("addbg");
                } else {
                    header.classList.remove("addbg");
                }
            }
        };

        if (closeResrv) {
            closeResrv.onclick = () => {
                reservation.classList.remove('active');
            };
        }

        btnResrv.forEach(boxa => {
            boxa.onclick = () => {
                reservation.classList.add('active');
            };
        });

        var swiper1 = new Swiper(".home-slider", {
            spaceBetween: 0,
            centeredSlides: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            loop: true,
        });

        var swiper2 = new Swiper(".swiper-gst-bk", {
            slidesPerView: 3,
            spaceBetween: 30,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            },
            loop: true,
            grabCursor: true,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                650: {
                    slidesPerView: 2,
                },
                950: {
                    slidesPerView: 3,
                },
            },
        });
    }, []);

    return (
        <>
            <div className="reservation" id="reservation">
                <div className="res-bg">
                    <i id="closeResrv" className="fas fa-bars fa-times"><RxCross2 /></i>
                    <div className="text">
                        <h3>Book A Vechile</h3>
                    </div>

                    <form action="">
                        <input type="text" placeholder="Full Name" />
                        <input type="number" placeholder="Phone Number" />
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="How Many" />
                        <input type="date" placeholder="Booking Date" />
                        <input type="time" />
                        <textarea name="" id="" cols="30" rows="2" placeholder="Add A Special Request (Optional)"></textarea>
                    </form>
                    <header className="header" id="header">
                        <nav>
                            <a className="logo" href="#">RENTALS</a>
                            <i id="openMenu" className="fas fa-bars"></i>
                            <a href="#"><i id="book" className="fa-solid fa-utensils btnresrv"></i></a>
                            <div className="menu">
                                <ul>
                                    <li className="active"><a href="/">Home</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#recipes">Cars</a></li>
                                    <li><a href="#menu">Bikes</a></li>
                                    <li><a href="#team">Team</a></li>
                                    {/* <span className="btn drak btnresrv" >RESERVATION</span> */}
                                </ul>
                                <div><a href="#" className="btn btnresrv">GET A RESERVATION Now</a></div>
                            </div>
                        </nav>
                    </header>

                    <button className="btn">find Vechile</button>
                </div>
            </div>

            <div className="home" id="home">
                <div className="swiper home-slider">
                    <div className="swiper-wrapper wrapper">
                        <div className="swiper-slide slide slide1 bg-overlay">
                            <div className="content">
                                <h3>Rent With Love</h3>
                                <h1>Hot and Ready to Ride</h1>
                                <p>Riding is a Passion, Exitement and Entusiastic roastery located in Egypt. We have<br />
                                    awesome team and the most talented Mechs in town!</p>
                            </div>
                        </div>

                        <div className="swiper-slide slide slide2 bg-overlay">
                            <div className="content">
                                <h3>Rentals Offers You</h3>
                                <h1>The Best Riding Experience!</h1>
                                <a href="#" className="btn btnresrv">GET A RESERVATION Now</a>
                            </div>
                        </div>

                        <div className="swiper-slide slide slide3 bg-overlay">
                            <div className="content">
                                <h3>Hello, We Are Riders</h3>
                                <h1>We Serve Quality Rides</h1>
                              
                            </div>
                        </div>
                    </div>
                    <div className="swiper-button-next btn-swip"></div>
                    <div className="swiper-button-prev btn-swip"></div>
                </div>
            </div>

            {/* about start */}
            <section className="about" id="about">
                <div className="contanier">
                    <div className="sec-head">
                        <span>Hello dear</span>
                        <h2>Welcome To CAR BIKE RENTALS</h2>
                        <img src={shape4} alt="" />
                    </div>
                    <div className="content">
                        <div className="div-p">
                            <p>CAR BIKE RENTALS was the first Rentals to open in City, the rentals was designed with the history in mind we have created a soft industrial, combined with an open Garage.</p>
                        </div>
                        <div className="boxs">
                            <div className="box">
                                <span>1995</span>
                                <h3>Grand Opening</h3>
                                <img src={shape13} alt="" />
                                <p>CAR BIKE RENTALS  was opened on May 6, 1990, the interior was created by the most famous artists. Today our CAR BIKE RENTALS  welcomes 250 people!</p>
                            </div>
                            <div className="box">
                                <span>2005</span>
                                <h3>Second Branch</h3>
                                <img src={shape13} alt="" />
                                <p>Since the very first day, CAR BIKE RENTALS  was a gathering place for teachers, doctors, actors. Therefore we decided to open our second branch!</p>
                            </div>
                            <div className="box">
                                <span>2015</span>
                                <h3>Security Award</h3>
                                <img src={shape13} alt="" />
                                <p>CAR BIKE RENTALS  was and still remains not just a CAR BIKE RENTALS , but also a remarkable part of the culture. We are happy to announce that we claim taste award.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* about end */}

            <section className="recipes" id="recipes">
                <div className="small-sec bg-overlay">
                    <div className="arrow-top"></div>
                    <div className="sec-head">
                        <span>CARS</span>
                        <h2>Cars</h2>
                    </div>
                    <div className="arrow-bottom"></div>
                </div>
                <div className="contanier">
                    <div className="boxs">
                        <div className="box">
                            <img src={img13} alt="" />
                            <span>Start Riding better</span>
                            <h4>Daily New Fresh Rides</h4>
                        
                            <a href="#" className="btn">READ MORE</a>
                        </div>
                        <div className="box">
                            <img src={img14} alt="" />
                            <span>Start Riding better</span>
                            <h4>Daily New Fresh Rides</h4>
                    
                            <a href="#" className="btn">READ MORE</a>
                        </div>
                        <div className="box">
                            <img src={img15} alt="" />
                            <span>Start Riding better</span>
                            <h4>Daily New Fresh Rides</h4>
                           
                            <a href="#" className="btn">READ MORE</a>
                        </div>
                    </div>
                </div>
            </section>

          

           
            <section className="recipes" id="recipes">
                <div className="small-sec bg-overlay">
                    <div className="arrow-top"></div>
                    <div className="sec-head">
                        <span>Bikes</span>
                        <h2>Bikes</h2>
                    </div>
                    <div className="arrow-bottom"></div>
                </div>
                <div className="contanier">
                    <div className="boxs">
                        <div className="box">
                            <img src={img1} alt="" />
                            <span>Start eating better</span>
                            <h4>Daily New Fresh Menus</h4>
                            <p>Restaurant’s delicious recipes made with natural ingredients.</p>
                            <a href="#" className="btn">READ MORE</a>
                        </div>
                        <div className="box">
                            <img src={img2} alt="" />
                            <span>Quality is the heart</span>
                            <h4>Fresh Ingredient, Tasty Meals</h4>
                            <p>Restaurant’s delicious recipes made with natural ingredients.</p>
                            <a href="#" className="btn">READ MORE</a>
                        </div>
                        <div className="box">
                            <img src={img3} alt="" />
                            <span>Hot & ready to serve</span>
                            <h4>Creative & Talented Chefs</h4>
                            <p>Restaurant’s delicious recipes made with natural ingredients.</p>
                            <a href="#" className="btn">READ MORE</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="guest-book" id="guest-book">
        <div className="small-sec bg-overlay">
            <div className="arrow-top"></div>
            <div className="sec-head">
                <span>People talk</span>
                <h2>Our Guestbook</h2>
            </div>
            <div className="contanier">
                <div className="swiper mySwiper swiper-gst-bk">
                    <div className="swiper-wrapper our-gst">

                        <div className="swiper-slide slide">

                            <img  className="ribbon" src={ribbon} alt=""/>

                            <div className="stars">
                                <i className="fa-solid fa-star"><FaStar/></i>
                                <i className="fa-solid fa-star"><FaStar/></i>
                                <i className="fa-solid fa-star"><FaStar/></i>
                                <i className="fa-solid fa-star"><FaStar/></i>
                                <i className="fa-solid fa-star"><FaStar/></i>
                            </div>

                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cupiditate aut magniofficiis distinctio nemo labore quia delectus.</h5>
                            <img className="img-ourbk" src={blog2}/>
                            <p>Lorem, ipsum.</p>
                        </div>

                        <div className="swiper-slide slide">

                            <img  className="ribbon" src={ribbon} alt=""/>

                            <div className="stars">
                           
                            <i className="fa-solid fa-star"><FaStar/></i>
                                <i className="fa-solid fa-star"><FaStar/></i>
                                <i className="fa-solid fa-star"><FaStar/></i>
                                <i className="fa-solid fa-star"><FaStar/></i>
                                <i className="fa-solid fa-star"><FaStar/></i>
                            </div>

                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cupiditate aut magniofficiis distinctio nemo labore quia delectus.</h5>
                            <img className="img-ourbk" src={blog2}/>
                            <p>Lorem, ipsum.</p>
                        </div>

                        <div className="swiper-slide slide">

                            <img  className="ribbon" src={ribbon} alt=""/>

                            <div className="stars">
                            <i className="fa-solid fa-star"><FaStar/></i>
                                <i className="fa-solid fa-star"><FaStar/></i>
                                <i className="fa-solid fa-star"><FaStar/></i>
                                <i className="fa-solid fa-star"><FaStar/></i>
                                <i className="fa-solid fa-star"><FaStar/></i>
                            </div>

                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cupiditate aut magniofficiis distinctio nemo labore quia delectus.</h5>
                            <img className="img-ourbk" src={blog2}/>
                            <p>Lorem, ipsum.</p>
                        </div>

                        <div className="swiper-slide slide">

                            <img  className="ribbon" src={ribbon} alt=""/>

                            <div className="stars">
                            <i className="fa-solid fa-star"><FaStar/></i>
                                <i className="fa-solid fa-star"><FaStar/></i>
                                <i className="fa-solid fa-star"><FaStar/></i>
                                <i className="fa-solid fa-star"><FaStar/></i>
                                <i className="fa-solid fa-star"><FaStar/></i>
                            </div>

                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cupiditate aut magniofficiis distinctio nemo labore quia delectus.</h5>
                            <img className="img-ourbk" src={blog2}/>
                            <p>Lorem, ipsum.</p>
                        </div>

                        <div className="swiper-slide slide">

                            <img  className="ribbon" src={ribbon} alt=""/>

                            <div className="stars">
                            <i className="fa-solid fa-star"><FaStar/></i>
                                <i className="fa-solid fa-star"><FaStar/></i>
                                <i className="fa-solid fa-star"><FaStar/></i>
                                <i className="fa-solid fa-star"><FaStar/></i>
                                <i className="fa-solid fa-star"><FaStar/></i>
                            </div>

                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cupiditate aut magniofficiis distinctio nemo labore quia delectus.</h5>
                            <img className="img-ourbk" src={blog2}/>
                            <p>Lorem, ipsum.</p>
                        </div>


                    </div>
                    
                </div>
                <div className="swiper-pagination swp-pag"></div>
            </div>
    
            <div className="arrow-bottom"></div>
        </div>

   </section>
   <section className="team" id="team">
                <div className="container">
                    <div className="sec-head">
                        <span>Meet Our Teams</span>
                        <h2>Our Master Teams</h2>
                        <img src={shape4} alt="" />
                    </div>
                    <div className="content_teams">
                        <div className="box">
                            <img src={chef1} alt="" />
                            <div className="text">
                                <h3>Jonathan Doe</h3>
                                <p>Head Mechanic</p>
                                <div className="social">
                                    <a href="#"><FaFacebook /></a>
                                    <a href="#"><FaInstagram /></a>
                                    <a href="#"><FaTwitter /></a>
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <img src={chef2} alt="" />
                            <div className="text">
                                <h3>Jonathan Doe</h3>
                                <p>Head Engine Mechanic</p>
                                <div className="social">
                                    <a href="#"><FaFacebook /></a>
                                    <a href="#"><FaInstagram /></a>
                                    <a href="#"><FaTwitter /></a>
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <img src={chef3} alt="" />
                            <div className="text">
                                <h3>Jonathan Doe</h3>
                                <p>Head Interior Mechanic</p>
                                <div className="social">
                                    <a href="#"><FaFacebook /></a>
                                    <a href="#"><FaInstagram /></a>
                                    <a href="#"><FaTwitter /></a>
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <img src={chef4} alt="" />
                            <div className="text">
                                <h3>Jonathan Doe</h3>
                                <p>Head Wiring Mechanic</p>
                                <div className="social">
                                    <a href="#"><FaFacebook /></a>
                                    <a href="#"><FaInstagram /></a>
                                    <a href="#"><FaTwitter /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

       
      
        </>
    );
}
