import React, { useState } from 'react'
import './modal.css'
import { GrFormClose} from "react-icons/gr";
import Firstbox from './Boxes/firstBox';
import Secondbox from './Boxes/secondBox';
import Thirdbox from './Boxes/third';
import Fourthbox from './Boxes/fourthBox';
import { modalInfo } from '../../data';

const fontStyles = {fontSize: '20px', position: 'absolute', right: '40px'}
function Modal({closeModal}) {

  const [datas, setDatas] = useState(modalInfo);

  console.log(datas);
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
          {datas.map((items)=>{
                const {name, id, value, type} = items;
                return (
                  <Firstbox type={type} value={value} id={id} name={name}/>
                )
              })}
          {/* <Firstbox/> */}
          <Secondbox/>
          <Thirdbox/>
          <Fourthbox/>
        </section> 
          
    </>
  )
}

export default Modal