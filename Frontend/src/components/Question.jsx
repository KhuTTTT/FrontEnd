import React, { useState, useEffect } from 'react';

function Question(props) {
  const [showAnswer, setShowAnswer] = useState(null);
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    if (props.quizData && props.quizData.input) {
      // Take the latest 5 questions from the quizData
      const latestQuizData = Object.values(props.quizData.input).slice(-5);
      setQuizData(latestQuizData);
    }
  }, [props.quizData]);

  if (!props.quizData || !props.quizData.input) {
    return <div style={{ marginTop: '30px', fontWeight: 'bold', marginLeft: '890px' }}>파일을 첨부해주세요.</div>;
  }

  const handleShowAnswer = (index) => {
    if (showAnswer === index) {
      setShowAnswer(null); // 이미 답이 표시중인 질문의 버튼을 누르면 답을 숨김
    } else {
      setShowAnswer(index); // 그 외의 경우에는 답을 표시
    }
  };

  return (
    <div>
      {quizData.map((q, index) => (
        <div key={index} className='questionContainer'>
          <h2 className='questionTitle'>
            Q{index + 1}: {q.question}
          </h2>
          <button onClick={() => handleShowAnswer(index)} className='AnswerBtn'>
            답 보기
          </button>
          <div className='answerOption' style={{ color: showAnswer === index ? 'red' : 'black' }}>
            1. {q.answer[0]}
          </div>
          {q.wrong.map((w, index) => (
            <div key={index} className='answerOption'>
              {index + 2}. {w}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Question;
