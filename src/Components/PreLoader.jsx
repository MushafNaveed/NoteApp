import svg1 from '../Asssets/pencil-svgrepo-com.svg';
import React from 'react';

export default function PreLoader() {
  return (
    <div className='Loader d-flex justify-content-center align-items-center'>
      <img src={svg1} alt="" />
    </div>
  );
}
