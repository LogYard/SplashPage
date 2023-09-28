import React from 'react';
import './App.css';

import NavBar from './Navbar.jsx';
import TechSpecs from './TechSpecs.jsx';
import Links from './Links.jsx';
import TeamSection from './TeamSection.jsx';


const App = () => {

  return (
    <div className='font-Caveat text-white'>

      {/* navbar */}
      {<NavBar/>}

      {/* rotating logo */}
      <img src="/LogoPicture.png" alt="" className='logo glow mx-auto mt-12 h-[20em] p-[1.5em]'/>

      {/* main page text */}
      <section id='key-phrases-box' className=''>
        <div className='text-center pt-5 font-medium text-green-600 text-MD'>
          UNDERSTAND THE <strong className='underline underline-offset-2'>HOW</strong>, <strong className='underline underline-offset-2'>WHEN</strong> AND <strong className='underline underline-offset-2'>WHERE</strong> OF YOUR CODE
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

      {/* applicaion dashboard photo */}
      <section id='home-page-display' className=''>
        <div id='photo-box' className='w-[80%] mx-auto mt-16 bg-gray-500/50 rounded-lg'>
          <img src="/DashboardPage.png" alt="" className='p-4'/>
        </div>
      </section>

      {/* applicaion visualize photo */}
      <section id='home-page-display' className=''>
        <div id='photo-box' className='w-[80%] mx-auto mt-8 bg-gray-500/50 rounded-lg'>
          <img src="/VisualizePage.png" alt="" className='p-4'/>
        </div>
      </section>

      {/* a dividing line */}
      <hr className="h-px my-16 bg-gray-200 border-0 dark:bg-gray-700" />

      {<TechSpecs/>}

      {/* a dividing line */}
      <hr className="h-px my-16 bg-gray-200 border-0 dark:bg-gray-700" />

      {<Links/>}

      {/* a dividing line */}
      <hr className="h-px my-16 bg-gray-200 border-0 dark:bg-gray-700" />

      {<TeamSection/>}


    </div>
  );
};

export default App;
