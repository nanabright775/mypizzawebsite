import React from 'react'
import { Link } from 'react-router-dom'
import HomeBackgroud from '../assets/pizza.jpeg'
import "../styles/home.css"

const Home = () => {
  return (
    <div className='home' style={{backgroundImage: `url(${HomeBackgroud})`}}>
      <div className='headerContainer'>
          <h1>Pizza is Sweet</h1>
          <p>Want to Order Some! Check out the Taste</p>
          <Link to = "/menu"> 
           <button>ORDER NOW</button>
           </Link>
      </div>
      
    </div>
  )
}

export default Home
