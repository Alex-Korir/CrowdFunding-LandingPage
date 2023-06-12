import React from 'react'
import crowdFund from '../images/logo-mastercraft.svg'
import bookmarkImg from '../images/icon-bookmark.svg'
import './firstContentSection.css'




function FirstContentSection({openModal}) {


  return (
    <>
      <section>
        <div className='holderContainer'>
              <div className='imgContainer'>
                <img src={crowdFund} alt='crowdFund logo' className='minecraft'/>
              </div>
              <h3>Mastercraft Bamboo Monitor Riser</h3>
              <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
              <div className='buttonFirstSection'>
                <button onClick={openModal} className='back'>Back this project</button>
                <div className='bookmark'>
                  <img src={bookmarkImg} alt='bookmark'/>
                  <p>bookmark</p>
                </div>
              </div>
          </div>
        </section>
        

        
    </>
  )
}

export default FirstContentSection