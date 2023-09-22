import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='font-Caveat text-white'>

      <nav className='bg-black h-24 content-center'>
        <img src="PageLogo.png" alt="" className='h-20 pt-4 mx-auto'/>
      </nav>

      <section id='key-phrases-box' className=''>
        <div className='text-center pt-16 font-medium text-green-600 text-MD'>
          UNDERSTAND THE <strong className='underline underline-offset-2'>HOW</strong> AND <strong className='underline underline-offset-2'>WHERE</strong> OF YOUR CODE
        </div>
        <div className='text-center pt-10 font-medium text-6xl'>
          Track your logs.
        </div>
        <div className='text-center pt-5 font-medium text-3xl'>
          Understand your application to the greatest extent.
        </div>
        <div className='text-center pt-5 font-light text-gray-500 text-xl'>
          Filter and visualize your logs based on your needs and goals.
        </div>
      </section>

      {/* home page render */}
      <section id='home-page-display' className=''>
        <div id='photo-box' className='w-[80%] mx-auto mt-16 bg-gray-500/50 rounded-lg'>
        <img src="SampleHomePage.png" alt="" className='p-4'/>
        </div>
      </section>

      <hr className="h-px my-16 bg-gray-200 border-0 dark:bg-gray-700" />

      <section id='meet-the-team' className='pb-24'>
        <div className='ml-10 font-medium text-5xl text-center'>
          Meet the team
        </div>
        <div id='team-cards-box' className='mx-20 mt-16 bg-gray-200'>
          <div id='member-card' className='bg-gray-700 h-96 w-[20%] rounded-lg'>
            <div id='image-box'>
              <img src="Icon.png" alt="" className='h-72'/>
            </div>
            <div id='person-info'>
              <div id='name'>
                Preston Coldwell
              </div>
              <div id='handles' className=''>
                <img src="github.svg" alt="" className='h-20'/>
                <img src="linkedin.svg" alt="" className='h-12'/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id='description-container'>
        <div id='description-box' className='bg-gray-500/50 w-[80%] h-36 mx-auto mt-20 p-4 text-center text-4xl rounded-lg shadow-2xl'>
          Add a description of the product here
        </div>
      </section> */}

    </div>
  )
}

export default App;
