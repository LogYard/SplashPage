/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */

import React from 'react';

const Links = () => {
  
  return (
    <section className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">

        <div className='mb-16 font-medium text-5xl text-center'> 
					Links 
        </div>

        <div className='text-xl w-[60%] text-center mx-auto'>
          For a demo, and for instructions on how to get started with LogYard, visit our GitHub repository!
        </div>

        <div key={Math.random()} className="relative rounded-lg shadow w-fit mx-auto mt-4 dark:bg-gray-800 dark:border-gray-400 border border-gray-500">
          <div className="py-5 px-5">
            <h3 className="text-2xl text-center tracking-tight text-gray-900 dark:text-white">
              <span>
                <a className='flex flex-row hover:cursor-pointer' href="https://github.com/oslabs-beta/LogYard">
                  
                  <img src="/githubIcon.png" alt="" className='h-8'/>
                  <img src="/GitHubLogo.png" alt="" className='h-8'/>
                </a>
              </span>
            </h3>
          </div>
        </div>

        <div className='text-xl w-[60%] mt-16 text-center mx-auto'>
          To read more about our product, check out our Medium article!
        </div>
			
        <div key={Math.random()} className="relative rounded-lg shadow w-fit mx-auto mt-4 dark:bg-gray-800 dark:border-gray-400 border border-gray-500">
          <div className="py-5 px-5">
            <h3 className="text-2xl text-center tracking-tight text-gray-900 dark:text-white">
              <span>
                <a className='flex flex-row hover:cursor-pointer' href="https://medium.com/@andrewclarkwagner/logyard-a-new-log-management-and-visualization-platform-for-developers-3df574575586">
                  <img src="/MediumLogo.png" alt="" className='h-8'/>
                </a>
              </span>
            </h3>
          </div>
        </div>
			
        <div className='text-xl w-[60%] mt-16 text-center mx-auto'>
          Don't forget to visit us on LinkedIn!
        </div>
			
        <div key={Math.random()} className="relative rounded-lg shadow w-fit mx-auto mt-4 dark:bg-gray-800 dark:border-gray-400 border border-gray-500">
          <div className="py-5 px-5">
            <h3 className="text-2xl text-center tracking-tight text-gray-900 dark:text-white">
              <span>
                <a className='flex flex-row hover:cursor-pointer' href="https://www.linkedin.com/company/logyard">
                  <img src="/LinkedInColored.png" alt="" className='h-8'/>
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
