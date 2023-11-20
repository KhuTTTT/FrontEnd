import React from 'react';
import { useNavigate } from 'react-router-dom';
import pptImage from '../components/ppt.svg';
import Summary_Quiz from '../components/summary_quiz.svg';

export default function Main() {
  const navigate = useNavigate();
  const quiz_Click = () => {
    navigate('/ppt');
  };
  const back_Click = () => {
    navigate('/quiz');
  };
  return (
    <div>
      <div className='main_btn'>
        <button className='all_main_btn' onClick={quiz_Click}>
          <img className='main_image1' src={pptImage} />
          <span className='image_intro'>Extract PPT</span>
          <hr />
          <span>논문, 학습 자료를 요약하여 ppt로 추출합니다.</span>
        </button>
        <button className='all_main_btn' onClick={back_Click}>
          <img className='main_image2' src={Summary_Quiz} />
          <span className='image_intro'>Quiz</span>
          <hr />
          <span>첨부한 파일에서 문제를 출제합니다.</span>
        </button>
      </div>
    </div>
  );
}
