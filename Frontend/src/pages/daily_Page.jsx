import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FileUploadDaily from '../components/FileUploadDaily';
import Question from '../components/Question';

export default function Daily() {
  const [quizData, setQuizData] = useState(null);
  const navigate = useNavigate();
  const back_Click = () => {
    navigate('/chapter');
  };
  return (
    <div>
      <h1 className='Title'>Daily Quiz</h1>
      <div className='UploadBox'>
        <div>
          <FileUploadDaily setQuizData={setQuizData} />
        </div>
      </div>
      <Question quizData={quizData} />

      <div className='back'>
        <button className='back_btn' onClick={back_Click}>
          완료
        </button>
      </div>
    </div>
  );
}
