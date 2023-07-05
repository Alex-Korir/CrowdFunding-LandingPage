import React from 'react'
import logo from '../images/logo.svg'
import './mainSection.css'
import ContentSection from './ContentSection'
import hamburger from '../images/icon-hamburger.svg'

function MainSection() {
  return (
    <>
      <section className='wholeContainer'>
        <div className='upperContainer'>
          <div className='contentContainer'>
            <div>
                <img src={logo} alt='This is the logo'/>
            </div>
            <img src={hamburger} alt='hamburger icon'/>
            <ul>
                <li>About</li>
                <li className='third'>Discover</li>
                <li>Get Started</li>
            </ul>
            </div>
          </div>
          <ContentSection/>
      </section>
      
    </>
  )
}

export default MainSection