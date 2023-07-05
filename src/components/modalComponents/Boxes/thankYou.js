import React from 'react'
import "./thankYou.css"
import iconCheck from '../../../images/icon-check.svg'

function Thankyou() {
 

  const handleThankBox = () => {
    window.location.reload()
  }
  return (
    <>
        <div className='thankContainer'>
            <img src={iconCheck} alt='confirmed'/>
            <h4>Thanks for your support!</h4>
            <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                an email once our campaign is completed.</p>
            <button onClick={handleThankBox}>Got it!</button>
        </div>
    </>
  )
}

export default Thankyou