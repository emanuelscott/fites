import React from 'react';
import Image from 'next/image';
import './Contact.css';
import instagramIcon from '../../public/inst.png'; 
import tiktokIcon from '../../public/tiktok.png'; 
import twitterIcon from '../../public/x.png'; 
import facebookIcon from '../../public/facebook.png';  
import emanImage from '../../images/eman.png';  // Change this line to use the correct path to the new image

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-form">
        <h2>CONTACT US</h2>
        <h3>WE ARE READY TO HELP YOU AND TRANSFORM YOUR LIFE!</h3>
        <form>
          <div className="form-group">
            <div className="form-field">
              <label htmlFor="name">NAME</label>
              <input type="text" id="name" />
            </div>
            <div className="form-field">
              <label htmlFor="email">E-MAIL</label>
              <input type="email" id="email" />
            </div>
          </div>
          <div className="form-group">
            <div className="form-field">
              <label htmlFor="phone">PHONE</label>
              <input type="tel" id="phone" />
            </div>
            <div className="form-field">
              <label htmlFor="service">SERVICE</label>
              <select id="service">
                <option value="sculpt">SCULPT & TONE PROGRAM</option>
                <option value="muscle">MUSCLE BUILDING</option>
                <option value="weightloss">WEIGHT LOSS</option>
              </select>
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="message">MESSAGE</label>
            <textarea id="message"></textarea>
          </div>
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
      <div className="image-and-social-media">
        <div className="contact-image">
          <Image 
            src={emanImage}  
            alt="Contact Image" 
            layout="fill"
            objectFit="cover"
          /> 
        </div>
        <div className="social-media">
          <div className="social-icons">
            <div className="icon">
              <Image src={instagramIcon} alt="Instagram" />
            </div>
            <div className="icon">
              <Image src={tiktokIcon} alt="TikTok" />
            </div>
            <div className="icon">
              <Image src={twitterIcon} alt="X/Twitter" />
            </div>
            <div className="icon">
              <Image src={facebookIcon} alt="Facebook" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
