import React from 'react'

function Vision() {
  return (
    <div
      id="Vision"
      className="flex h-screen flex-col bg-vision bg-cover bg-left bg-no-repeat"
    >
      <div className="relative mt-28 ml-4 text-lg font-extrabold md:ml-32 md:mt-40 md:text-2xl">
        <h1 className="mb-2 text-orange-500">Vision</h1>
        <p className="mt-8 text-sm font-normal md:max-w-lg md:text-lg">
          We have been organising Women Techies with a goal to encourage and
          facilitate the <br /> participation of women in the tech space.
        </p>
        <p className="mt-4 text-sm font-normal md:max-w-lg md:text-lg">
          Knowing that our efforts benefit so many talented women and being able
          to see the satisfaction on our participant{"'"}s faces makes all of us
          extremely proud in the work that we do.
        </p>
        <img
          src="VISIONARY.svg"
          alt=""
          className="right-24 mt-8 h-52 w-52 lg:absolute lg:top-40 lg:h-60 lg:w-60 xl:right-10 xl:top-8 xl:h-96 xl:w-96"
        />
      </div>
    </div>
  )
}

export default Vision
