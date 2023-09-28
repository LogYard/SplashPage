/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */

import React from 'react';

const Links = () => {
  
  return (
    <section className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">

        <div className='pb-6 font-medium text-5xl text-center'> 
					Links 
        </div>

        <div key={Math.random()} className="relative rounded-lg shadow w-fit mx-auto mt-4 dark:bg-gray-800 dark:border-gray-700 border border-gray-500">
          <div className="py-5 px-5">
            <h3 className="text-2xl text-center tracking-tight text-gray-900 dark:text-white">
              <span>
                <a className='flex flex-row text-blue-400 hover:cursor-pointer' href="https://github.com/oslabs-beta/LogYard">
                  <img src="/githubIcon.png" alt="" className='h-12'/>
                  <img src="/GitHubLogo.png" alt="" className='h-12'/>
                </a>
              </span>
            </h3>
          </div>
        </div>
			
        <div key={Math.random()} className="relative rounded-lg shadow w-fit mx-auto mt-4 dark:bg-gray-800 dark:border-gray-700 border border-gray-500">
          <div className="py-5 px-5">
            <h3 className="text-2xl text-center tracking-tight text-gray-900 dark:text-white">
              <span>
                <a className='text-blue-400 hover:cursor-pointer' href="https://medium.com/@andrewclarkwagner/logyard-a-new-log-management-and-visualization-platform-for-developers-3df574575586">
                  <img src="/MediumLogo.png" alt="" className='h-12'/>
                </a>
              </span>
            </h3>
          </div>
        </div>
			
			
			
			
			
			
			
      </div>
    </section>
  );
};

export default Links;
