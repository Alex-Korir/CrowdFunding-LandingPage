import React from 'react'
import "./blackEdition.css"

function BlackEdition() {
  return (
    <>
        <section className='blackEditionSection'>
            <div className='heading'>
                <h5>Black Edition Stand</h5>
                <p>Pledge $75 or more</p>
            </div>
            <div className='parag'>
                <p>
                    You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
                    member list. Shipping is included.
                </p>
            </div>
            <div className="reward">
                <div className='numbers'>
                    <h3>64</h3>
                    <p>left</p>
                </div>
                <button>Select Reward</button>
            </div>
        </section>
    </>
  )
}

export default BlackEdition