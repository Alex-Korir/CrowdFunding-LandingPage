import React from 'react'

function Thirdbox({handleClick, selection}) {
  const containerClassName = selection === 'input3' ? 'covering selected' : 'covering';

  return (
    <>
      <div className={containerClassName}>
        <div className='pledging'>
            <div className='optionBox'>
              <input type='radio' className='radioButton' value='input3' onClick={()=> handleClick('input3')} checked={selection==="input3"}/>
            </div>
            <div className='pledgeCont'>
              <div className='topLayer'>
                <div className='rightside'>
                  <h5 className='selectHead'>Black Edition Stand</h5>
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
        {selection === 'input3' && 
            <div className='choosingSect'>
              <div className='statement'>
                <p>Enter your pledge</p>
              </div>
              <div className='amount'>
                <input type='textbox'/>
                <button>Continue</button>
              </div>
            </div>}
      </div>
        
    </>
  )
}

export default Thirdbox