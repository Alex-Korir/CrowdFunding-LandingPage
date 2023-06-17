import React, {useState} from 'react'

function Secondbox({handleClick, selection, requirmentMet}) {
  const containerClassName = selection === 'input2' ? 'covering selected' : 'covering';
  const [numTwo, setNumTwo] = useState("");

  function handlingChange(e){
    const newValue = e.target.value;
    setNumTwo(newValue);
    console.log(newValue);
  }
  return (
    <>
      <div className={containerClassName}>
        <div className='pledging'>
            <div className='optionBox'>
              <input type='radio' className='radioButton' onClick={() => handleClick('input2')} value="input2" checked={selection==='input2'}/>
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
          {selection ==='input2' && 
          <div className='choosingSect'>
             <div className='statement'>
              <p>Enter your pledge</p>
            </div>
            <div className='amount'>
              <div className='inputSpan'>
                <span className='symbol'>$</span>
                <input type='text' name="name1" value={numTwo} onChange={handlingChange}/>
              </div>
              
              <button onClick={requirmentMet}>Continue</button>
            </div>
          </div>}

      </div>
        
    </>
  )
}

export default Secondbox