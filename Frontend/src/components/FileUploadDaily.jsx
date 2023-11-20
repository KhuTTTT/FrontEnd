import React, { useRef, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Swal from 'sweetalert2';
import axios from 'axios';

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

function FileUploadDaily(props) {
  const fileInput = useRef();
  const [loading, setLoading] = useState(false);

  const handleButtonClick = async () => {
    axios
      .get('http://localhost:8000/randomquestion', {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        console.log(response);
        props.setQuizData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={handleButtonClick} className='UploadBtnDaily'>
        데이터 불러오기
      </button>
      <div>{loading && <div>Uploading...</div>}</div>
    </div>
  );
}

export default FileUploadDaily;
