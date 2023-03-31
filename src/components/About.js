import React from 'react'
import "../styling/About.css"
import vimal from "../Image/vimal.jpeg";


const About = () => {
  return (
    <>
    <hr  />
    <hr />
    <div className='about-container' id='about'>
    {/* <div className='img'></div> */}
    <div className='about-content'>
    <h1> About <span>the Gym</span> </h1>
    <div className='para'>
    <p >
    The Firm provides a 24/7 Fitness facility to members of their gym, as well as surrounding areas to help people reach and maintain their goals. We combine different types of fitness equipment to meet different fitness needs and levels.

At The Firm you will find all the latest strength and cardio equipment along with an energetic group exercise program that includes Pound, Zumba, Kickboxing, Bootcamp, Muscle Building and many other cardio classes. You will find a supportive environment with all kinds of people who are working just as hard as you to meet their goals.


Our Staff, Trainers & Group Exercise Instructors are committed to offering our members a great fitness experience. Whether you are a mom looking to get back into shape, a marathon runner trying to shave a few minutes off your personal best or just trying to stay healthy we would love to help you realize your potential and meet your goals!
    </p>
    </div>
    </div>
    <div className='about-below'>
     <h2>Our <span>Moto</span></h2>
    </div>
    <div className='last'>
<p>We believe that - “The body achieves what the mind believes.”</p>
    </div>
    {/* <div className='trainer-block'>
    <h2>Our <span>Head Trainer</span> </h2>


    </div> */}



    {/* <div className='trainer'>
    <img src={vimal} alt="" />
    </div> */}
    <div className='arrow' id='first'>
      <a href="#first"><i className="fa-solid fa-arrow-up" ></i></a>
      </div>
    
    </div>

    </>
  )
}

export default About