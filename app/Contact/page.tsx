'use client'

import React from 'react';
import Image from 'next/image';
import './page.css';
import instagramIcon from '../../public/inst.png'; 
import tiktokIcon from '../../public/tiktok.png'; 
import twitterIcon from '../../public/x.png'; 
import facebookIcon from '../../public/facebook.png';  
import emanImage from '../../public/eman.png'; 
import Footer from '../Footer/page';








export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4e40c7db-9b8a-4968-8ab1-5ea0cbf1d422");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <main>
    <div className="contact-page">
      <div className="contact-form">
        <h2>CONTACT US</h2>
        <h3>WE ARE READY TO HELP YOU AND TRANSFORM YOUR LIFE!</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <div className="form-field">
              <label htmlFor="name">NAME</label>
              <input type="text" id="name" placeholder='Enter your name' />
            </div>
            <div className="form-field">
              <label htmlFor="email">E-MAIL</label>
              <input type="email" id="email" placeholder='Enter your email' required />
            </div>
          </div>
          <div className="form-group">
            <div className="form-field">
              <label htmlFor="phone">PHONE</label>
              <input type="tel" id="phone" placeholder='Enter your phone number' required />
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
            <textarea id="message" placeholder='Enter your message' required></textarea>
          </div>
          <button type="submit">SEND MESSAGE
            <span>{result}</span>
          </button>
        </form>
      </div>
      <div className="image-and-social-media">
        <div className="contact-image">
          <Image 
            src={emanImage}  
            alt="Contact Image" 
            layout="fill"
            objectFit="cover"
           className='w-[544px] h-[547px]' 
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
    <Footer/>
    </main>
  );
};


