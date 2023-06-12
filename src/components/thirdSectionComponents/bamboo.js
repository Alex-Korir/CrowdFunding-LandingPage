import React from 'react'
import "./bamboo.css"

function Bamboo() {
  return (
    <>
        <section className='bambooSection'>
            <div className='heading'>
                <h5>Bamboo Stand</h5>
                <p>Pledge $25 or more</p>
            </div>
            <div className='parag'>
                <p>
                You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
                you’ll be added to a special Backer member list.
                </p>
            </div>
            <div className="reward">
                <div className='numbers'>
                    <h3>101</h3>
                    <p>left</p>
                </div>
                <button>Select Reward</button>
            </div>
        </section>
    </>
  )
}

export default Bamboo