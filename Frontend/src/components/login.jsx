import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Log() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let sessionStorage = window.sessionStorage;
  const navigate = useNavigate();

  const Login_Click = () => {
    navigate('/login');
  };

  const Logout_Click = () => {
    setIsLoggedIn(false);
    sessionStorage.clear();
    navigate('/');
  };

  useEffect(() => {
    console.log(isLoggedIn);
    if (sessionStorage.getItem('loginId') === '1') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  let button;
  let welcome;

  if (isLoggedIn) {
    button = (
      <button className='login' onClick={Logout_Click}>
        Logout
      </button>
    );
    welcome = <p className='intro'>환영합니다!</p>;
  } else {
    button = (
      <button className='login' onClick={Login_Click}>
        Login
      </button>
    );
    welcome = <p className='intro'>로그인 해주세요!</p>;
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
      {button}
      {welcome}
    </div>
  );
}
