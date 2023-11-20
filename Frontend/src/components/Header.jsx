import React from 'react';
import Log from './login';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const title_Click = () => {
    navigate('/subject');
  };
  return (
    <div className='header-container'>
      <div className='header-wrap'>
        <div className='header-left-wrap'>
          <h2 className='login_title' onClick={title_Click}>
            KhuT
          </h2>
        </div>
        <Log />
      </div>
    </div>
  );
}
