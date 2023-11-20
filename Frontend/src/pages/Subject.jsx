import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Subject_Modal from '../modal/subject_modal';
import del_Img from '../components/delete.png';
import sub_Img1 from '../components/subject1.png';
import sub_Img2 from '../components/subject2.png';
import sub_Img3 from '../components/subject3.png';
import sub_Img4 from '../components/subject4.png';
import sub_Img5 from '../components/subject5.png';

const imageSources = [sub_Img1, sub_Img2, sub_Img3, sub_Img4, sub_Img5];

const Subject = () => {
  const navigate = useNavigate();

  const Subject_Click = () => {
    navigate('/chapter');
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subjects, setSubjects] = useState(() => {
    const storedSubjects = localStorage.getItem('subjects');
    return storedSubjects ? JSON.parse(storedSubjects) : [];
  });

  const add_Click = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addSubject = (newSubject) => {
    setSubjects([...subjects, newSubject]);
    closeModal();
  };

  const deleteSubject = (index) => {
    const updatedSubjects = [...subjects];
    updatedSubjects.splice(index, 1);
    setSubjects(updatedSubjects);
  };

  useEffect(() => {
    localStorage.setItem('subjects', JSON.stringify(subjects));
  }, [subjects]);

  return (
    <div className='subject_wrap'>
      {subjects.map((subject, index) => (
        <button key={index} className='subject_bt' onClick={Subject_Click}>
          <div className='subject_text'>
            <img className='subject_img' src={imageSources[index]} alt={`Subject ${index + 1}`} />
            {subject}
            <span>
              <button className='del_sub' onClick={() => deleteSubject(index)}>
                <img className='delete_img' src={del_Img} />
              </button>
            </span>
          </div>
        </button>
      ))}
      <button className='subject_add_bt' style={{ fontSize: '100px' }} onClick={add_Click}>
        <p className='plus'>+</p>
      </button>
      {isModalOpen && <Subject_Modal closeModal={closeModal} addSubject={addSubject} />}
    </div>
  );
};

export default Subject;
