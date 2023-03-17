import React from 'react';
import Footer from '../components/Footer.js';
import background from "../assets/images/background.jpg";


export default function Home() {
  return (

    <div>
      {/* Background Image */}
      <div className='bg-home' style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh'
      }}>
      </div>

      <h1 class='text-middle' >Hi, I am <h1 class='hand-writing'>Yigit Ocak .</h1></h1>

      <div className='home-footer'>
        <Footer />
      </div>
    </div>


  )

}