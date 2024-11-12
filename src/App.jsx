import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'


const App = () => {
  return (
    <>
      <Header />
      <Hero num='1' text='hello world' />
      <Hero num='2' />
      <Hero num='3' />
      <Hero num='4' />
      <Hero num='5' />



    </>
  )
}

export default App
