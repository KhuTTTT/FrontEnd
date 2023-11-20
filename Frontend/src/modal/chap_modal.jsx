import React, { useState } from 'react';
import './chap.css';

const Chap_Modal = ({ closeModal, addChapter }) => {
  const [newChap, setNewChap] = useState('');

  const handleAddChap = () => {
    addChapter(newChap);
    closeModal();
  };

  return (
    <div className='chap_modal_wrap'>
      <div className='chap_modal-content'>
        <h2>Add Chapter</h2>
        <input
          type='text'
          className='chap_modal'
          placeholder='Chapter Title'
          value={newChap}
          onChange={(e) => setNewChap(e.target.value)}
        />
        <br />
        <br />
        <button className='upload_btn' onClick={handleAddChap}>
          Upload
        </button>
        <button className='close' onClick={closeModal}>
          close
        </button>
      </div>
    </div>
  );
};

export default Chap_Modal;
