import React from 'react'
import { useState } from 'react'


function Firstbox({type, id, value, name}) {
  const [selection, setSelection] = useState(false);
  return (
    <section>

        <div className='pledging'>
            <div className='optionBox'>
              {/* {datas.map((items)=>{
                const {name, id, value, type} = items;
                return (
                  <input type={type} value={value} id={id} name={name} className='radioButton' />
                )
              })} */}
              <input type={type} value={value} id={id} name={name} ></input>
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
    </section>
  )
}

export default Firstbox