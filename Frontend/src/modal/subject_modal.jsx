import React, { useState } from 'react';
import "./subject.css"

const Subject_Modal = ({ closeModal, addSubject }) => {
  const [newSubject, setNewSubject] = useState('');

  const handleAddSubject = () => {
    addSubject(newSubject);
    closeModal();
  };

  return (
    <div className="sub_modal_wrap">
      <div className="sub_modal-content">
        <h2>Add Subject</h2>
        <input type="text" className='subject_modal'
          placeholder="Subject Title"
          value={newSubject}
          onChange={(e) => setNewSubject(e.target.value)}
        />
        <br/>
        <div>
          <button className='make_btn' onClick={handleAddSubject}>make</button>
          <button className="close" onClick={closeModal}>close</button>
        </div>
      </div>
    </div>
  );
};

export default Subject_Modal