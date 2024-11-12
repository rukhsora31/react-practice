import React from 'react'
import './Hero.scss'

const Hero = ({ num, text }) => {
  return (
    <>
    <section className={`hero hero${num}`} id={`hero${num}`}>
        <div className="container">
            <h1 className="hero__title">SECTION {num}</h1>
            <h2>{text}</h2>
        </div>
    </section>
    </>
  )
}

export default Hero
