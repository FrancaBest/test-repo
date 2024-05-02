import React from 'react'
import heroImage from "../assets/images/car.jpg"

const Hero = (props) => {
    // Destructuring the props object
    const {heading = "Welcome to my page", image} = props //Adding a fallback/Default paramter in case no argument is provided
  return (
    <div style={{backgroundColor:"purple",color:"white"}}>
        <div className="">
            <img src={image} alt="" width={400}/>
        </div>
        {/* <h1>Welcome to my page</h1>  */}
        <h1>{heading}</h1>
        
    </div>
  )
}

export default Hero