import React from 'react'
import logo from '../images/logo.svg'
import './mainSection.css'
import ContentSection from './ContentSection'

function MainSection() {
  return (
    <>
      <section className='wholeContainer'>
        <div className='upperContainer'>
          <div className='contentContainer'>
            <div>
                <img src={logo} alt='This is the logo'/>
            </div>
            <ul>
                <li>About</li>
                <li>Discover</li>
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