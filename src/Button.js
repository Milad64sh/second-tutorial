import React from 'react';
import './App.css';

export default function Button({ handleDelete }) {
  return (
    <button
      type='button'
      className='btn'
      style={{ background: 'red', color: 'white', fontSize: '2rem' }}
      onClick={handleDelete}
    >
      delete me
    </button>
  );
}
