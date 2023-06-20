import React, {useState} from 'react'
import './modal.css'
import { GrFormClose} from "react-icons/gr";
import Firstbox from './Boxes/firstBox';
import Secondbox from './Boxes/secondBox';
import Thirdbox from './Boxes/third';
import Fourthbox from './Boxes/fourthBox';
import Thankyou from './Boxes/thankYou';


const fontStyles = {fontSize: '20px', position: 'absolute', right: '40px', cursor: 'pointer'}
function Modal({closeModal}) {
  const [selection, setSelection] = useState('');

  const [requirment, setRequirment] = useState(false);
  
  const [numTwo, setNumTwo] = useState("");
  function handleClick(box) {
    setSelection(box);
  }

  function requirmentMet(){
    if(!newValue){
      setRequirment(true);
      console.log("Hujafanya vizuri");
    }
    else if(newValue <=25 && newValue >= 75){
      setRequirment(true);
      console.log("Cannot be higher than 25 and must be lower than 75");
    }
    
  }
  const newValue = e.target.value;
  function handlingChange(e){

    setNumTwo(newValue);
    console.log("You are crazy");


    
  }


  
  
  return (
    <>
        <section className='modalSection'>
          <div className='overlay'></div>
        </section>

        {!requirment ? ( <section className='modal-content'>
          <div className='closeButt' >
            <GrFormClose style={fontStyles} onClick={closeModal}/>
          </div>
          <h2>Back this project</h2>
          <p className='claim'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
          
          <Firstbox handleClick={handleClick} selection={selection} requirmentMet={requirmentMet}/>
          <Secondbox handleClick={handleClick} selection={selection} requirmentMet={requirmentMet} handlingChange={handlingChange} numTwo={numTwo}/>
          <Thirdbox handleClick={handleClick} selection={selection} requirmentMet={requirmentMet}/>
          <Fourthbox/>
        </section> ) : ( <Thankyou/>)}
       
          
    </>
  )
}

export default Modal