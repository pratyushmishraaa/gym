import React from 'react'
import "../styling/Contact.css"
 
const About = () => {
   return ( 
      <>
      <div className='contact-container' id='reach'>
      <div className='contact-heading'>
      <h1>Contact <span>Us</span></h1>
      </div>
      <div className='contents-contact'>
      <div className='box-contact'>
      <h2> 🏢 Address : </h2> <br /> 
      The Firm <br />
      Veer Kunwar Singh Colony Charitravan Buxar , <br />
      802101 <br />
      Bihar
      
      
      </div>

      <div className='box-contact'>
      <h2 className='phone'> 📞 Reach Us By :</h2><br />
      <i class="fa-solid fa-phone"> : 7488680768</i> <br />
      <i class="fa-solid fa-envelope"> : <a href="mailto:pratyushmishra287@gmail.com" target="_blank">pratyushmishra287@gmail.com</a> </i>
      </div>
      </div>
      <div className='footer'>
      <h1> Designed And Created By @ Pratyush Mishra </h1>

      </div>

      <div className='timing-box'>
      <h2><i class="fa-solid fa-clock"></i> Opening Hours :</h2>
      <br /><br />
      <p>
      24 X 7
      </p>
      </div>
      <div className='arrow' id='first'>
      <a href="#first"><i className="fa-solid fa-arrow-up" ></i></a>
      </div>



      </div>

      </>

   )
}

export default About;
