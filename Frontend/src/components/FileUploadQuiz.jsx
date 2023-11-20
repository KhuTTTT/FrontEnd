import React, { useRef, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Swal from 'sweetalert2';
import axios from 'axios';

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

function FileUploadQuiz(props) {
  const fileInput = useRef();
  const [loading, setLoading] = useState(false);

  const uploadFile = async () => {
    setLoading(true);
    const file = fileInput.current.files[0];
    const filePath = `pdfs/${file.name}`;

    const { error } = await supabase.storage.from('url').upload(filePath, file);
    if (error) {
      console.error('Error uploading file: ', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    } else {
      console.log('File uploaded successfully');
      Swal.fire('Uploaded!', 'Your file has been uploaded.', 'success');

      // Create FormData object
      const formData = new FormData();
      // Append the file to the form data
      formData.append('file', file);
      // Append the file name to the form data
      formData.append('filename', file.name);

      // Send a POST request to the API endpoint
      axios
        .post('http://localhost:8000/create_file', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((response) => {
          console.log(response);
          props.setQuizData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setLoading(false);
  };

  return (
    <div>
      <div>
        <input type='file' style={{ display: 'none' }} accept='application/pdf' ref={fileInput} id='fileUpload' />
        <label htmlFor='fileUpload' className='file-upload-button'>
          파일 선택
        </label>
      </div>
      <div>
        <button className='UploadBtn' onClick={uploadFile}>
          Upload
        </button>
      </div>
      <div>{loading && <div>Uploading...</div>}</div>
    </div>
  );
}

export default FileUploadQuiz;
