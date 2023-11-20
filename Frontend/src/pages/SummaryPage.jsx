import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Summary() {
  const navigate = useNavigate();
  const quiz_Click = () => {
    navigate('/quiz');
  };
  const back_Click = () => {
    navigate('/main');
  };
  return (
    <div>
      <h1>Summary</h1>
      <div className='quiz'>
        <button className='quiz_btn' onClick={quiz_Click}>
          quiz
        </button>
      </div>
      <div className='back'>
        <button className='back_btn' onClick={back_Click}>
          이전
        </button>
      </div>
    </div>
  );
}
