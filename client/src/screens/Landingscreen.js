
import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"; // Import ScrollLink and scroll
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo.png';
import aboutImage from '../assets/about.jpg';
import room1 from '../assets/room-1.jpg';
import room2 from '../assets/room-2.jpg';
import room3 from '../assets/room-3.jpg';
import facebookIcon from '../assets/facebook.png';
import instagramIcon from '../assets/instagram.png';
import youtubeIcon from '../assets/youtube.png';
import twitterIcon from '../assets/twitter.png';


function Landingscreen() {
  const [isReadMore, setIsReadMore] = useState(false);

  const readMore = () => {
    setIsReadMore(!isReadMore);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div>
      {/* Header */}
      <header className="header" id="home" data-aos="fade-down">
        <div className="section__container header__container">
          <h2 style={{ color: 'black', fontSize: '100px' }}><b> 'မလိခ' </b> ဧည့်ရိပ်သာ</h2>
          <h3>Simple - Unique - Friendly</h3>
          <h1>Make Yourself At Home<br />In Our <span>Hotel</span>.</h1>
          <RouterLink to='/home'>
            <button className="btn landingbtn" style={{ color: 'white' }}>Get Start</button>
          </RouterLink>
        </div>
      </header>

      <hr />

      {/* Service Section */}
      <section className="service" id="service" data-aos="fade-up">
        <div className="section__container service__container">
          <div className="service__content">
            <p className="section__subheader">SERVICES</p>
            <h2 className="section__header">Strive Only For The Best.</h2>
            <ul className="service__list">
              <li>
                <span><i className="ri-shield-star-line"></i></span>
                High Class Security
              </li>
              <li>
                <span><i className="ri-24-hours-line"></i></span>
                24 Hours Room Service
              </li>
              <li>
                <span><i className="ri-headphone-line"></i></span>
                Conference Room
              </li>
              <li>
                <span><i className="ri-map-2-line"></i></span>
                Tourist Guide Support
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      <hr/>

      {/* About Section */}
      <section className="about__container" id="about" data-aos="fade-left">
        <div className="about__image">
          <img src={aboutImage} alt="about" />
        </div>

        <div className="about__content">
          <p className="section__subheader">ABOUT US</p>
          <h2 className="section__header">The Best Holidays Start Here!</h2>
          <p className="section__description">
            With a focus on quality accommodations, personalized experiences, and seamless booking, our platform is dedicated to ensuring that every traveler embarks on their dream holiday with confidence and excitement.
            {/* Additional content that appears when "Read More" is clicked */}
            {isReadMore && (
              <>
                <br />
                Our dedicated team of professionals is available around the clock to assist you with any inquiries or special requests you may have. We strive to make your stay as enjoyable and memorable as possible, ensuring that every detail is taken care of. Explore our range of services and discover the unparalleled comfort and luxury that await you.
              </>
            )}
          </p>
          <div className="about__btn">
            <button className="btn" onClick={readMore}>
              {isReadMore ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact" data-aos="fade-right">
        <div className="section__container footer__container">
          <div className="footer__col">
            <div className="logo">
              <RouterLink to="/home"><img src={logo} alt="logo" /></RouterLink>
            </div>
            <p className="section__description">
              Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.
            </p>
            <RouterLink to="/home"><button className="btn">Book Now</button></RouterLink>
          </div>
          <div className="footer__col">
            <h4>QUICK LINKS</h4>
            <ul className="footer__links">
              <li><ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink></li>
              <li><ScrollLink to="service" smooth={true} duration={500}>Services</ScrollLink></li>
              <li><ScrollLink to="about" smooth={true} duration={500}>About Us</ScrollLink></li>
              <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>OUR SERVICES</h4>
            <ul className="footer__links">
              <li><RouterLink to="#">Concierge Assistance</RouterLink></li>
              <li><RouterLink to="#">Flexible Booking Options</RouterLink></li>
              <li><RouterLink to="#">Airport Transfers</RouterLink></li>
              <li><RouterLink to="#">Wellness & Recreation</RouterLink></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>CONTACT US</h4>
            <ul className="footer__links">
              <li><RouterLink to="#">rayalpark@info.com</RouterLink></li>
            </ul>
            <div className="footer__socials">
              <RouterLink to="#"><img src={facebookIcon} alt="facebook" /></RouterLink>
              <RouterLink to="#"><img src={instagramIcon} alt="instagram" /></RouterLink>
              <RouterLink to="#"><img src={youtubeIcon} alt="youtube" /></RouterLink>
              <RouterLink to="#"><img src={twitterIcon} alt="twitter" /></RouterLink>
            </div>
          </div>
        </div>
        <div className="footer__bar">
          Copyright © 2024 Group VI. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Landingscreen;
