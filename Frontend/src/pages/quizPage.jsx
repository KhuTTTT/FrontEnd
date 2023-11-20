import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FileUploadQuiz from '../components/FileUploadQuiz';
import Question from '../components/Question';

export default function Quiz() {
  const [quizData, setQuizData] = useState(null);
  const navigate = useNavigate();
  const back_Click = () => {
    navigate('/main');
  };

  return (
    <div>
      <h1 className='Title'>Quiz</h1>
      <div className='UploadBox' style={{ marginLeft: '800px' }}>
        <div>
          <FileUploadQuiz setQuizData={setQuizData} />
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
