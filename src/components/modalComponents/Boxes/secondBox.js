import React from 'react'

function Secondbox() {
  return (
    <>
        <div className='pledging'>
            <div className='optionBox'>
              <input type='radio' checked className='radioButton'></input>
            </div>
            <div className='pledgeCont'>
              <div className='topLayer'>
                <div className='rightside'>
                  <h5>Bamboo Stand</h5>
                  <h5 className='cyan'>Pledge $25 or more</h5>
                </div>
                <div className='leftside'>
                  <p className='parr'>101</p>
                  <p className='leftParr'>left</p>  
                </div>             
              </div>
              <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
              you’ll be added to a special Backer member list.
              </p>
            </div>
           
          </div>
    </>
  )
}

export default Secondbox