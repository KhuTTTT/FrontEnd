import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FileUploadPpt from '../components/FileUploadPpt';

export default function Ppt() {
  const [quizData, setQuizData] = useState(null);
  const navigate = useNavigate();

  const back_Click = () => {
    navigate('/main');
  };
  return (
    <div>
      <div className='Title' style={{ marginTop: '50px' }}>
        PPT
      </div>
      <div className='UploadBox' style={{ marginLeft: '800px' }}>
        <div>
          <FileUploadPpt setQuizData={setQuizData} />
          <a href={quizData}>
            <button className='PptBtn'>다운로드</button>
          </a>
        </div>
      </div>

      <div className='back' style={{ marginTop: '300px' }}>
        <button className='back_btn' onClick={back_Click}>
          이전
        </button>
      </div>
    </div>
  );
}
