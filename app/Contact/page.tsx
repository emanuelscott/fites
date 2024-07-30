import React from 'react';
import Image from 'next/image';
import './Contact.css';
import instagramIcon from '../../public/mdi_instagram.png'; 
import tiktokIcon from '../../public/ph_tiktok-logo-light.png'; 
import twitterIcon from '../../public/akar-icons_x-fill.png'; 
import youtubeIcon from '../../public/hugeicons_youtube.png'; 

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-form">
        <h2>CONTACT</h2>
        <h3>
          WE ARE READY TO HELP YOU&nbsp;<br />
          AND TRANSFORM YOUR LIFE!
        </h3>
        <form>
          <div className="form-group">
            <div className="form-field">
              <label htmlFor="name">NAME</label>
              <input type="text" id="name" />
            </div>
            <div className="form-field">
              <label htmlFor="email">E-MAIL</label>
              <input type="email" id="email"  />
            </div>
          </div>
          <div className="form-group">
            <div className="form-field">
              <label htmlFor="phone">PHONE</label>
              <input type="tel" id="phone"  />
            </div>
            <div className="form-field">
              <label htmlFor="subject">SUBJECT</label>
              <input type="text" id="subject"  />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="message">MESSAGE</label>
            <textarea id="message" ></textarea>
          </div>
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
      <div className="social-media">
        <h3>FOLLOW SOCIAL MEDIA</h3>
        <div className="social-icons">
          <div className="icon">
            <Image src={instagramIcon} alt="Instagram" />
            <p>INSTAGRAM</p>
          </div>
          <div className="icon">
            <Image src={tiktokIcon} alt="TikTok" />
            <p>TIKTOK</p>
          </div>
          <div className="icon">
            <Image src={twitterIcon} alt="Twitter" />
            <p>X/TWITTER</p>
          </div>
          <div className="icon">
            <Image src={youtubeIcon} alt="YouTube" />
            <p>YOUTUBE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
