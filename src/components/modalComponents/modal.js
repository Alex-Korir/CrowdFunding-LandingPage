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
  // const [errors, setErrors] = useState({});
  const [requirment, setRequirment] = useState(false);
  const [inputValues, setInputValues] = useState({
    inputDos: '',
    inputThres: ''
  });


  function handleClick(box) {
    setSelection(box);
  }
// THIS FUNCTION OPENS THE THANKYOU POP UP
  function requirmentMet(){
    if(inputValues.inputDos >= 25 && inputValues.inputDos <= 75){
      setRequirment(true);
      console.log("Ni God");
    }
    else if(inputValues.inputThres >= 75){
      setRequirment(true);
      console.log('Onge bir mat kolo');
    }
    else{
      setRequirment(true);
      console.log('Nda ma lelei');
    }
    
  }
  // THIS FUNCTION DESTRUCTURES THE VALUES ALLOWING THEM TO BE ASSIGNED A SPECIFIC CONDITION

  function handlingChange(e, inputName){
    setInputValues((prevValues) => ({
      ...prevValues, [inputName]: e.target.value,
    }));
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
          <Secondbox handleClick={handleClick} selection={selection} requirmentMet={requirmentMet} handlingChange={handlingChange} inputValues={inputValues.inputDos}/>
          <Thirdbox handleClick={handleClick} selection={selection} requirmentMet={requirmentMet} handlingChange={handlingChange} inputValues={inputValues.inputThres}/>
          <Fourthbox/>
        </section> ) : ( <Thankyou/>)}
       
          
    </>
  )
}

export default Modal