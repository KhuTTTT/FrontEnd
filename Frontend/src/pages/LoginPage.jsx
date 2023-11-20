import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const email_check = (e) => {
    const regex = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return e !== '' && e !== 'undefined' && regex.test(e);
  };

  const password_check = (e) => {
    const regex = /^[A-Za-z0-9`~!@#\$%\^&*(){}[\]_=\+\\|;:'"<>,./?]{5,20}$/;
    return e !== '' && e !== 'undefined' && regex.test(e);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const buttonStyle =
    email_check(email) && password_check(password)
      ? { backgroundColor: 'rgb(8, 77, 206)' }
      : { backgroundColor: '#152536' };

  const handleSubmission = () => {
    sessionStorage.setItem('loginId', 1);
    navigate('/subject');
  };

  return (
    <div className='login-form'>
      <form action=''>
        <div>
          <div className='login-title'>Login</div>
          <div className='inputs'>
            <input type='text' className='text-field' value={email} onChange={handleEmailChange} />
            <div className='warning' id='email-i'>
              {email_check(email) ? (
                <span> </span>
              ) : (
                <span style={{ color: 'red' }}>올바른 이메일을 입력해주세요.</span>
              )}
            </div>

            <input type='password' className='text-field' value={password} onChange={handlePasswordChange} />
            <div className='warning'>
              {password_check(password) ? (
                <span> </span>
              ) : (
                <span style={{ color: 'red' }}>영어+숫자+특수문자를 조합하여 작성해주세요.</span>
              )}
            </div>
          </div>
          <input type='submit' id='submit-btn' style={buttonStyle} value='확인' onClick={handleSubmission} />
        </div>
      </form>
    </div>
  );
}
