import React from 'react'

function Fourthbox() {
  return (
    <>
      <div className='covering' style={{"border": "1px solid #e9e9e9"}}>
        <div className='pledging'>
          <div className='optionBox'>
            <input type='radio' className='radioButtonn' checked={false}/>
          </div>
          <div className='pledgeCont'>
            <div className='topLayer'>
              <div className='rightside'>
                <h5 className='fourtH' style={{"color":"darkgray"}}>Mahohany Special Edition</h5>
                <h5 className='cyanFourth cyan'>Pledge $200 or more</h5>
              </div>
              <div className='leftside'>
                <p className='parrFourth parr'>0</p>
                <p className=' leftparrF leftParr'>left</p>  
              </div>
            </div>
            <p className='fourthP'>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
              to our Backer member list. Shipping is included.
            </p>
          </div>
        </div>
      </div>
        
    </>
  )
}

export default Fourthbox