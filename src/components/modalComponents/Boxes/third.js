import React from 'react'

function Thirdbox() {
  return (
    <>
        <div className='pledging'>
            <div className='optionBox'>
              <input type='radio' checked className='radioButton'></input>
            </div>
            <div className='pledgeCont'>
              <div className='topLayer'>
                <div className='rightside'>
                  <h5>Black Edition Stand</h5>
                  <h5 className='cyan'>Pledge $75 or more</h5>
                </div>
                <div className='leftside'>
                  <p className='parr'>64</p>
                  <p className='leftParr'>left</p>  
                </div>  
              </div>
              <p>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                member list. Shipping is included.
              </p>
            </div>
           
          </div>
    </>
  )
}

export default Thirdbox