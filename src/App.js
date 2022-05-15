import React from 'react';
import './App.css'
import Contador from './pages/contador';
import CapsLock from './components/capslock';

export default function App() {
  return (
    <div>
      <div><CapsLock>asdfasdffsdf</CapsLock></div>
      <Contador />
    </div>

  );
}


