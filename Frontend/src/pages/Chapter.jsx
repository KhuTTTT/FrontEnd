import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Chap_Modal from '../modal/chap_modal';
import del_Img from '../components/delete.png';

const Chapter = () => {
  const navigate = useNavigate();
  const { subject } = useParams();

  const chapter_Click = () => {
    navigate('/main');
  };

  const daily_Click = () => {
    navigate('/daily');
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chapters, setChapters] = useState(() => {
    const storedChapters = localStorage.getItem('chapters');
    return storedChapters ? JSON.parse(storedChapters) : [];
  });

  const add_Click = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addChapter = (newChapter) => {
    setChapters([...chapters, newChapter]);
    closeModal();
  };

  const deleteChapter = (index) => {
    const updatedChapters = [...chapters];
    updatedChapters.splice(index, 1);
    setChapters(updatedChapters);
  };

  useEffect(() => {
    localStorage.setItem('chapters', JSON.stringify(chapters));
  }, [chapters]);

  return (
    <div className='chap_wrap'>
      <h1 className='chap_title'>{subject}</h1>
      <hr />
      {chapters.map((chapter, index) => (
        <React.Fragment key={index}>
          <div>
            <button className='chap_detail' onClick={chapter_Click}>
              {chapter}
            </button>
            <button className='delete_btn' onClick={() => deleteChapter(index)}>
              <img className='delete_img' src={del_Img} />
            </button>
          </div>
          <hr />
        </React.Fragment>
      ))}
      <div className='add'>
        <button className='daily_btn' onClick={daily_Click}>
          Daily
        </button>
        <button className='add_btn' onClick={add_Click}>
          Add
        </button>
      </div>
      {isModalOpen && <Chap_Modal closeModal={closeModal} addChapter={addChapter} />}
    </div>
  );
};

export default Chapter;
