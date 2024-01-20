import React from 'react';
import HomePage from './HomePage';

const App = () => {
  return (
    <div className='h-screen overflow-auto bg-lavendarBg p-3 border-solid border-2 relative'>
      {/* <img src={ghatruImg} className='absolute z-0 w-full' /> */}
      <HomePage />
    </div>
  )
}

export default App;