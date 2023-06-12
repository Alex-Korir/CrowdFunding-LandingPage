import React, {useState} from 'react'
import './modal.css'
import { GrFormClose} from "react-icons/gr";
import Firstbox from './Boxes/firstBox';
import Secondbox from './Boxes/secondBox';
import Thirdbox from './Boxes/third';
import Fourthbox from './Boxes/fourthBox';


const fontStyles = {fontSize: '20px', position: 'absolute', right: '40px'}
function Modal({closeModal}) {
  const [selection, setSelection] = useState('');
  
  function handleClick(box) {
    setSelection(box);
  }
  
  return (
    <>
        <section className='modalSection'>
          <div className='overlay'></div>
        </section>
        <section className='modal-content'>
          <div className='closeButt' >
            <GrFormClose style={fontStyles} onClick={closeModal}/>
          </div>
          <h2>Back this project</h2>
          <p className='claim'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
          
          <Firstbox handleClick={handleClick} selection={selection}/>
          <Secondbox handleClick={handleClick} selection={selection}/>
          <Thirdbox handleClick={handleClick} selection={selection}/>
          <Fourthbox/>
        </section> 
          
    </>
  )
}

export default Modal