import React, {useState} from 'react'
import './contentSection.css'
import FirstContentSection from './FirstContentSection'
import SecondContentSection from './SecondContentSection'
import ThirdContentSection from './ThirdContentSection'
import Modal from './modalComponents/modal'



function ContentSection() {

  const [isModalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
    console.log("You and the rest");
    document.body.classList.add('modal-open');
  }
  
  function closeModal() {
    setModalOpen(false);
    console.log("You and ture");
    document.body.classList.add('modal-close');
  }

  return (
    <>
        <div className='bigSection'>
            <FirstContentSection openModal={openModal}/>
            <SecondContentSection/>
            <ThirdContentSection/>
            {isModalOpen && <Modal closeModal={closeModal}/>}
        </div>
    </>
  )
}

export default ContentSection