import React from 'react'
import './SecondContentSection.css'

function SecondContentSection() {
  return (
    <>
      <div className='SecondContent'>
        <div className='valuesPart'>
            <div className='backed'>
              <h3>$89,914</h3>
              <p>of $100,000 backed</p>
            </div>
            <hr></hr>
            <div className='backed spacing'>
              <h3>5,007</h3>
              <p>total backers</p>
            </div>
            <hr></hr>
            <div className='backed spacing'>
              <h3>56</h3>
              <p>days left</p>
            </div>
          </div>
          <div className='progressBar'>
            <div className='innerProgressBar'></div>
          </div>
      </div>
    </>
  )
}

export default SecondContentSection