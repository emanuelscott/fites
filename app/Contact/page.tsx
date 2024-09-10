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
import Swal from 'sweetalert2'







export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult;
    const formData = new FormData(event.target);

    formData.append("access_key","410b6195-a355-40ea-ab61-6846b9543358");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    
    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
        confirmButtonColor: "#D80000"
      });
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
            <input type="hidden" name="subject" value="New Submission from ESFitness"/>
            <input type="hidden" name="from_name" value="ESFitness"/>
              <label htmlFor="name">NAME</label>
              <input type="text" id="name" name='name' placeholder='Enter your name' required />
            </div>
            <div className="form-field">
              <label htmlFor="email">E-MAIL</label>
              <input type="email" id="email" name='email' placeholder='Enter your email' required pattern='.+@gmail.com' />
            </div>
          </div>
          <div className="form-group">
            <div className="form-field">
              <label htmlFor="phone">PHONE</label>
              <input type="tel" id="phone" name='phone' placeholder='Enter your phone number' required required-pattern='1234567890' maxLength={10}/>
            </div>
            <div className="form-field">
              <label htmlFor="service">SERVICE</label>
              <select id="service">
                <option value="sculpt">SCULPT & TONE</option>
                <option value="muscle">MUSCLE BUILDING</option>
                <option value="weightloss">WEIGHT LOSS</option>
              </select>
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="message">MESSAGE</label>
            <textarea id="message" name='message' placeholder='Enter your message' required></textarea>
          </div>

          
          <button type="submit">Send Message</button>
      
          <span>{result}</span>
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
              <a href='https://www.instagram.com/emanuelscottfitt?igsh=MTdndHRzdm5wNG5s&utm_source=qr'>
              <button type='button'><Image src={instagramIcon} alt="Instagram"/></button>
             </a>
            </div>
            <div className="icon">
              <a href='https://youtube.com/@emanuelscottfitt?si=cabx4RkARMlU0p1F'>
              <button type='button'><Image src={tiktokIcon} alt="TikTok" /></button>
              </a>
            </div>
            <div className="icon">
              <a href='https://x.com/Emanuelscottfit'>
              <button type='button'><Image src={twitterIcon} alt="X/Twitter" /></button>
              </a>
            </div>
            <div className="icon">
              <a href='https://www.facebook.com/emanuelscottfitt'>
              <button type='button'><Image src={facebookIcon} alt="Facebook" /></button>
              </a>
            </div>
          </div>
        </div>
      </div>

      
    </div>
    <Footer/>
    </main>
  );
};


