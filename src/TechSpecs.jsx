/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */

import React from 'react';

const TechSpecs = () => {
  const directions = [
    {
      name: 'Log Centralization',
      description: 'With the logging packages created by LogYard, you can insert customizable logs into every portion of your full-stack application. Include a level, message, and optional context object, and logs will be sent to a local containerized database - or, if you prefer, to your own MongoDB on the cloud. These logs will then be visible on our app\'s dashboard!',
      gif: '/GIF/SaveFilter.gif',
    },
    {
      name: 'Log Analysis',
      description: 'After generating logs in your app, you can use the LogYard app to view, filter, and group your logs by level, message, or a specific context property that you included. Logs can also be visualized within the app based on your filters and time selections, allowing for time-based analysis of your log\'s properties.',
      gif: '/GIF/GraphFilterAndTime.gif',
    },
  ];
  
  return (
    <section className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className='pb-6 font-medium text-5xl text-center'> Technical Specifications </div>
        <div className='text-center text-gray-300 pb-12 pt-8'>
					LogYard is a log management and visualization platform designed by our team within the open-source community. Consisting of fully flexible front-end and back-end logging packages, as well as a web application that allows you to filter and visualize your logs, we have worked hard to make your logging a breeze!
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">

          {directions.map((step) => {
            return (
              <div key={Math.random()} className="relative h-fit rounded-lg shadow border border-gray-500 bg-gray-800">

                <div className="pt-5 px-5">
                  <h3 className="text-2xl text-center tracking-tight text-white">
                    <p>{step.name}</p>
                  </h3>
                  <p className="mt-3 mb-4 font-light text-white">
                    {step.description}
                  </p>
                </div>

                {/* GIF */}
                <img src={step.gif} className='px-3 pb-4 bottom-0' />

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
