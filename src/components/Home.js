import React from 'react'
import "../styling/Home.css"



const Home = () => {
  return (
    <>
      <div className="main-container" id='first' >
   
     <div className='navbar'>
     <div className='logo'>
     <h2>The  <span>Firm</span> </h2>
    
     </div>
     <div className='nav-links'>
      <ul>
        <a href="#first"  className='active' >Home</a> 
        <a href="#about">About </a>
        <a href="#services">Services</a>
        <a href="#reach">Contact</a>
      </ul>
     </div>
     </div>
     <div className='mid-content'>
     <h1>Welcome to <span className='change_content'></span></h1>   
     </div>

     <div className='mid-content2'>
     <h2>Consider the possibilities</h2>
     </div>

     <div className='Social-box'>
     <a className='instagram' href="https://instagram.com/pratyush_mishrraa?igshid=YWJhMjlhZTc=" target="_blank"><i className="fa-brands fa-instagram"></i></a>


     <a className='facebook' href="https://www.facebook.com/profile.php?id=100008669806584&mibextid=LQQJ4d" target="_blank"><i className="fa-brands fa-facebook"></i></a>


     <a className='twitter' href="https://twitter.com/Pratyush_287" target="_blank"><i className="fa-brands fa-twitter"></i></a>


     <a className='email' href="mailto:pratyushmishra287@gmail.com" target="_blank"> <i className="fa-solid fa-envelope"></i></a>

     </div>
    
      

      </div>
    </>
  )
}

export default Home