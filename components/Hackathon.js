import React from 'react'

function HackathonComponent() {
  return (
    <div
      id="Hackathon"
      className="relative flex h-screen flex-col bg-hack bg-cover bg-right bg-no-repeat"
    >
      <div className="mt-20 self-end text-lg font-extrabold md:mr-60 md:mt-40 md:text-2xl">
        <h1 className="z-10 mb-2 text-pink-500">Hackathon</h1>
        <p className="z-10 max-w-xs text-sm font-normal md:max-w-md md:text-lg">
          This 24-hour hackathon aims to provide talented and independent women
          with the platform and resources to help them grow in their desired
          field and contribute to society with impactful and beneficial
          solutions.
        </p>
        <p className="z-10 max-w-xs pt-4 text-sm font-normal md:max-w-md md:text-lg">
          <span className="font-bold">
            There is a minimum requirement of 50% female participation in each
            team
          </span>
          , to ensure and promote womens participation in tech and tech-related
          events.
        </p>
        <p className="z-10 max-w-xs pt-4 text-sm font-normal md:max-w-md md:text-lg">
          WomenTechies will be an opportunity for the budding developers to
          showcase their potential and skills under the mentorship of experts
          and come up with imperceptible ideas and ground-breaking solutions to
          problems that could potentially solve the woes of thousands of people.
        </p>
        <img
          src="HACKER.svg"
          alt=""
          className="ml-10 h-40 w-40 lg:absolute lg:left-10 lg:top-60 lg:h-52 lg:w-52 xl:left-16 xl:top-36 xl:h-96 xl:w-96"
        />
      </div>
    </div>
  )
}

export default HackathonComponent
