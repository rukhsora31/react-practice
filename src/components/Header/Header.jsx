import React from 'react'
import './Header.scss'
import Aa from '../Aa/Aa'

const Header = () => {
  return (
   <>
   <header className="header">
    <div className="container">
        <nav className="nav">
            <Aa num='1' />
            <Aa num='2' />
            <Aa num='3' />
            <Aa num='4' />
            <Aa num='5' />


        </nav>
    </div>
   </header>
   </>
  )
}

export default Header
