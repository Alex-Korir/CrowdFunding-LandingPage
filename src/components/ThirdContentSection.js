import React from 'react'
import "./ThirdContentSection.css"
import Bamboo from './thirdSectionComponents/bamboo'
import BlackEdition from './thirdSectionComponents/blackEdition'
import Mahogony from './thirdSectionComponents/mahogony'

function ThirdContentSection({openModal}) {
  return (
    <>
        <section className="ThirdContainer">
            <div className='about'>
                <h4>About this project</h4>
                <p className='firstP'>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
                    to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
                    your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
                </p>
                <p className='secondP'> Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
                to allow notepads, pens, and USB sticks to be stored under the stand.
                </p>
            </div>
            <Bamboo openModal={openModal}/>
            <BlackEdition/>
            <Mahogony/>
        </section>
    
    </>
  )
}

export default ThirdContentSection