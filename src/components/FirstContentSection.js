import React, { useState } from 'react'
import crowdFund from '../images/logo-mastercraft.svg'
import bookmarkImg from '../images/icon-bookmark.svg'
import bookmarkImgCopy from '../images/icon-bookmark copy.svg'
import './firstContentSection.css'


function FirstContentSection({openModal}) {
  const [bookmarked, setBookmarked] = useState(false);
  const [bookmarkName, setBookmarkName] = useState(false);
  const [bookmarkImgs, setBookmarkImgs] = useState(false);
  const bookmarkClassname = bookmarked ? 'bookmark book-marked' : 'bookmark'
  const imageBookMark = bookmarkImgs ? bookmarkImgCopy : bookmarkImg;
  const namingBookmark = bookmarkName ? 'Bookmarked' : 'Bookmark'
 const handleBookmark = () => {
  setBookmarked(!bookmarked);
  setBookmarkName(!bookmarkName);
  setBookmarkImgs(!bookmarkImgs);
 }

  return (
    <>
      <section>
        <div className='holderContainer'>
              <div className='imgContainer'>
                <img src={crowdFund} alt='crowdFund logo' className='minecraft'/>
              </div>
              <h3>Mastercraft Bamboo Monitor Riser</h3>
              <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
              <div className='buttonFirstSection'>
                <button onClick={openModal} className='back'>Back this project</button>
                <div className={bookmarkClassname} onClick={handleBookmark}>
                  <img src={imageBookMark} alt='bookmark'/>
                  <p>{namingBookmark}</p>
                </div>
              </div>
          </div>
        </section>
        

        
    </>
  )
}

export default FirstContentSection