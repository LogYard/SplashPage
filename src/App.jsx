import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='font-Caveat text-white'>
      <section id='logo-container'>
        <img src="PageLogo.png" alt="" className='w-[60%] mx-auto pt-36'/>
      </section>
      <section id='key-phrase-box' className='text-center pt-24 font-medium text-6xl'>
        <div className=''>
          The Ultimate Logging Manager and Visualizer
        </div>
      </section>
      <section id='description-container'>
        <div id='description-box' className='bg-gray-500/50 w-[80%] h-36 mx-auto mt-20 p-4 text-center text-4xl rounded-lg'>
          Add a description of the product here
        </div>
      </section>
    </div>
  )
}

export default App;
