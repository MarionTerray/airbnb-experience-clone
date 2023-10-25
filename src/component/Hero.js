import React from 'react';
import '../style/Hero.css';
import HeroImg from '../images/photo-grid.png';

function Hero() {
  return (
    <section className='hero'>
        <img className='hero--img' src={HeroImg}/>
        <h1 className='hero--header'>Online Experience</h1>
        <p className='hero--txt'>Join unique interactive activities led 
            by one-of-a-kind hosts-all without leaving home.</p>
         
    </section>
  )
}

export default Hero