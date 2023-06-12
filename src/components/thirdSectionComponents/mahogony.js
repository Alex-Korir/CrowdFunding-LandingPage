import React from 'react'
import "./mahogany.css"

function Mahogony() {
  return (
    <>
        <section className='mahoganySection'>
            <div className='heading'>
                <h5>Mahogany Special Edition</h5>
                <p>Pledge $200 or more</p>
            </div>
            <div className='parag'>
                <p>
                You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
                to our Backer member list. Shipping is included.
                </p>
            </div>
            <div className="reward">
                <div className='numbers'>
                    <h3>0</h3>
                    <p>left</p>
                </div>
                <button>Our of Stock</button>
            </div>
        </section>
    </>
  )
}

export default Mahogony