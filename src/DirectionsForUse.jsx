/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */

import React from 'react';

const DirectionsForUse = () => {
  const directions = [
    {
      name: '1. npm install through CLI',
      description: 'run ~npm install logyard~',
      gif: 'https://media.giphy.com/media/duNowzaVje6Di3hnOu/giphy-downsized-large.gif',
    },
    {
      name: '2. Then do this',
      description: 'Description here...',
      gif: 'https://media.giphy.com/media/duNowzaVje6Di3hnOu/giphy-downsized-large.gif',
    },
  ];
  
  return (
    <section className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">

          {directions.map((step) => {
            return (
              <div className="relative h-[26em] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border border-gray-500">
                <div className="pt-5 px-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>{step.name}</p>
                  </h3>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
                {/* GIF */}
                <img src={step.gif} className='absolute px-3 pb-3 bottom-0' />
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default DirectionsForUse;
