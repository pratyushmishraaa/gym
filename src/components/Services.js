import React from 'react'
import "../styling/Services.css"
import vimal from "../Image/vimal.jpeg"
import pic from "../Image/gym equipment.jpg"
import photo from "../Image/group fitness.jpg"
import nutrition from "../Image/nutrition.jpg"
import onetoone from "../Image/personal training.jpg"
import locker from "../Image/locker.jpg"


const Services = () => {
  return (
    
      <>
      <hr /><hr />
      <div className='services-container' id='services'>
      <div className='trainer'>
      <h2>Our<span> head trainer</span> </h2>
      </div>
      <div className='head-trainer'>
      <img src={vimal} alt="" />
      </div>
      <div className='about-head'>
      <p>He is head trainer of the gym, he is gold medalist 🥇 in heavy weight lifting at state level.He is so dedicated  towards his work. He always push your limits to higher level. He has  a positive and enthusiastic attitude, which can be contagious and help to motivate clients. He is flexible and adaptable, able to modify workout plans based on the needs and goals of each client. He always maintain a high level of professionalism at all times, which includes dressing appropriately, being punctual, and using proper language.</p>
      </div>
      <div className='heading-service'>
      <h2>Services <span>Provided</span></h2>

      </div>
      <div className='service-given'>
      <div className='cards-1'>
      <h3>Workout Equipment</h3>
      <img src={pic} alt="" />
      </div>
      <div className='cards-1'>
      <h3>Group Training</h3>
      <img src={photo} alt="" />
      </div>
      <div className='cards-1'>
      <h3>Nutrition Plans</h3>
      <img src={nutrition} alt="" />
      </div>
      <div className='cards-1'>
      <h3>Personal Training</h3>
      <img src={onetoone} alt="" />
      </div>
      <div className='cards-1'>
      <h3>Locker Rooms</h3>
      <img src={locker} alt="" />
      </div>
      


      </div>

      <div className='arrow-up' id='first'>
      <a href="#first"><i className="fa-solid fa-arrow-up" ></i></a>
      </div>


      </div>
      </>
    
  )
}

export default Services