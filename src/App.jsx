import React from 'react';
import './App.css';

import DirectionsForInstall from './DirectionsForInstall.jsx';
import DirectionsForUse from './DirectionsForUse.jsx';
import TeamSection from './TeamSection.jsx';

const App = () => {

  return (
    <div className='font-Caveat text-white'>

      {/* navbar */}
      <nav className='bg-black h-24 content-center'>
        <img src="PageLogo.png" alt="" className='h-20 pt-4 mx-auto'/>
      </nav>

      {/* rotating logo */}
      <a id='rotating-logo' href="https://github.com/oslabs-beta/LogYard">
        <img src="LogoPicture.png" alt="" className='logo mx-auto mt-12 h-[20em] p-[1.5em]'/>
      </a>

      {/* main page text */}
      <section id='key-phrases-box' className=''>
        <div className='text-center pt-5 font-medium text-green-600 text-MD'>
          UNDERSTAND THE <strong className='underline underline-offset-2'>HOW</strong> AND <strong className='underline underline-offset-2'>WHEN</strong> OF YOUR CODE
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

      {/* applicaion home page photo */}
      <section id='home-page-display' className=''>
        <div id='photo-box' className='w-[80%] mx-auto mt-16 bg-gray-500/50 rounded-lg'>
          <img src="SampleHomePage.png" alt="" className='p-4'/>
        </div>
      </section>

      {/* a dividing line */}
      <hr className="h-px my-16 bg-gray-200 border-0 dark:bg-gray-700" />

      {/* directions for installing app */}
      <div>
        <div className='ml-10 font-medium text-5xl text-center'> Install Our Product </div>
        {<DirectionsForInstall/>}
      </div>

      {/* a dividing line */}
      <hr className="h-px mt-4 mb-16 bg-gray-200 border-0 dark:bg-gray-700" />

      {/* directions for using app */}
      <div>
        <div className='ml-10 font-medium text-5xl text-center'> Use Our Product </div>
        {<DirectionsForUse/>}
      </div>

      {/* a dividing line */}
      <hr className="h-px my-16 bg-gray-200 border-0 dark:bg-gray-700" />

      {/* team section */}
      <section id='meet-the-team' className='pb-24'>
        <div className='ml-10 font-medium text-5xl text-center'> Our Team </div>
        {<TeamSection/>}
      </section>

    </div>
  );
}

export default App;
