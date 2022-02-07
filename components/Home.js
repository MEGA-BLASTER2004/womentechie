import React from 'react'

function HomeComponent() {
  return (
    <div
      id="Home"
      className="flex h-screen flex-col bg-techiesmall bg-cover bg-right-top bg-no-repeat sm:bg-techiemedium xl:bg-techie"
    >
      <div className=" my-10 mx-auto flex w-max flex-col justify-center space-y-4 text-rose-500 lg:my-28 lg:mx-44 lg:space-y-3">
        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="text-4xl font-extrabold md:mr-3 md:text-7xl">Women</h1>
          <h1 className="text-4xl font-extrabold md:text-7xl">Techies</h1>
          <div className="flex w-full items-center space-x-1">
            <hr
              className="h-[0.2rem] flex-grow border border-rose-500 md:h-[0.4rem]"
              color="#f43f5d"
            />
            <h3 className="text-2xl font-bold md:text-4xl">2021</h3>
            <hr
              className="h-[0.2rem] flex-grow border border-rose-500 md:h-[0.4rem]"
              color="#f43f5d"
            />
          </div>
        </div>
        <button className="rounded-full bg-rose-500 px-4 py-2 text-lg font-bold text-white duration-150 hover:scale-105 hover:bg-rose-600 active:scale-95">
          Apply with Devfolio
        </button>
        <button className="w-fit self-center rounded-full border border-rose-500 px-4 py-2 text-lg font-bold text-rose-500 duration-150 hover:scale-105 hover:bg-rose-500 hover:text-white active:scale-95">
          RSVP
        </button>
      </div>
    </div>
  )
}

export default HomeComponent
