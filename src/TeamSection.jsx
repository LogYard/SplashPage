/* eslint-disable react/jsx-key */
import React from 'react';

const TeamSection = () => {
  
  const teamMembers = [
    {
      name: 'Preston Coldwell',
      role: 'Software Developer',
      photo: 'PrestonHeadshot.jpeg',
      motto: 'Loves working on this splash page so freaking much',
      githubURL: 'https://github.com/PrestonColdwell',
      linkedinURL: 'www.linkedin.com/in/prestoncoldwell'
    },
    {
      name: 'Ryan Smithey',
      role: 'Software Developer',
      photo: 'RyanHeadshot.jpg',
      motto: 'Loves looking at this splash page so freaking much',
      githubURL: 'https://github.com/RyanSmithey',
      linkedinURL: 'www.linkedin.com/in/ryan-smithey'
    },
    {
      name: 'Geoffrey Sun',
      role: 'Software Developer',
      photo: 'GeoffHeadshot.png',
      motto: 'Loves looking at this splash page so freaking much',
      githubURL: 'https://github.com/geoffsun2',
      linkedinURL: 'https://www.linkedin.com/in/geoffrey-sun/'
    },
    {
      name: 'Andrew Wagner',
      role: 'Software Developer',
      photo: 'AndyHeadshot.jpeg',
      motto: 'Loves looking at this splash page so freaking much',
      githubURL: 'https://github.com/a-c-wagner',
      linkedinURL: 'https://www.linkedin.com/in/andrewclarkwagner/'
    },
    {
      name: 'Brian Hwang',
      role: 'Software Developer',
      photo: 'public/BrianHeadshot.jpg',
      motto: 'Loves looking at this splash page so freaking much',
      githubURL: 'https://github.com/bri-engineer',
      linkedinURL: 'https://www.linkedin.com/in/brianhwang2/'
    },
  ];

  return (
    <section className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          
          {teamMembers.map((member) => {
            return (
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="max-h-72 pl-4"
                    src={member.photo}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">
                    {member.role}
                  </span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    {member.motto}
                  </p>
                  <ul className="flex space-x-4 sm:mt-0">
                    <li>
                      <a
                        href={member.githubURL}
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href={member.linkedinURL}
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <svg className="w-6 h-6 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"><path d="m13.6313333 13.6346667h-2.3693333v-3.7126667c0-.88533333-.018-2.02466667-1.2346667-2.02466667-1.2353333 0-1.42399997.96333334-1.42399997 1.95933334v3.77800003h-2.36933333v-7.6346667h2.276v1.04066667h.03066667c.318-.6 1.09133333-1.23333334 2.24666663-1.23333334 2.4006667 0 2.8446667 1.58 2.8446667 3.63666667v4.1906667zm-10.0733333-8.67933337c-.76266667 0-1.37533333-.61733333-1.37533333-1.37666666 0-.75866667.61333333-1.37533334 1.37533333-1.37533334.76 0 1.376.61666667 1.376 1.37533334 0 .75933333-.61666667 1.37666666-1.376 1.37666666zm1.188 8.67933337h-2.376v-7.6346667h2.376zm10.0706667-13.6346667h-13.63600003c-.65266667 0-1.18066667.516-1.18066667 1.15266667v13.69466663c0 .6373334.528 1.1526667 1.18066667 1.1526667h13.63400003c.652 0 1.1853333-.5153333 1.1853333-1.1526667v-13.69466663c0-.63666667-.5333333-1.15266667-1.1853333-1.15266667z"/></svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default TeamSection;
