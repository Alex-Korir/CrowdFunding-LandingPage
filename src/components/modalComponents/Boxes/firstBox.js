import React from 'react'
// import { useState } from 'react'


function Firstbox({handleClick, selection, requirmentMet}) {
  const containerClassName = selection === "input1" ? 'selected covering' : 'covering'
  return (
    <section>
      <div className={containerClassName}>
        <div className='pledging'>
          <div className='optionBox'>
            <input className='radioButton' type='radio' onClick={()=>handleClick('input1')}  value = "input1" checked={selection==="input1"}/>
          </div>
          <div className='pledgeCont'>
            <div className='topLayer'>
              <h5>Pledge with no reward</h5>                
            </div>
            <p>Choose to support us without a reward if you simply believe in our project. As a backer, 
              you will be signed up to receive product updates via email.
            </p>
          </div>
        </div>
        {selection ==='input1' && 
          <div className='choosingSect'>
            <div className='amount'>
              <button onClick={requirmentMet}>Continue</button>
            </div>
          </div>}
      </div>
        
        
    </section>
  )
}

export default Firstbox