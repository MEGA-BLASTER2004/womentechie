import React from 'react'

function AboutComponent() {
  return (
    <div
      id="About"
      className="flex h-screen flex-col bg-about bg-cover bg-left bg-no-repeat"
    >
      <div className="relative mt-20 ml-8 text-lg font-extrabold md:ml-32 md:mt-24 md:text-2xl">
        <h1 className="mb-2 text-purple-500">About DSC</h1>
        <p className="max-w-xs text-sm font-normal md:max-w-lg md:text-lg">
          DSC VIT powered by Google Developers is a student community at VIT
          Vellore. We strive to bring about technological innovations among
          students and we do so by providing a platform for them to exhibit
          their talents. We are a group of passionate designers, developers and
          managers who work together to bring about collaborative results that
          better the lives of everyone around us.
        </p>

        <h1 className="mb-2 mt-8 text-purple-500">About VIT</h1>
        <p className="max-w-xs text-sm font-normal md:max-w-lg md:text-lg">
          DSC VIT powered by Google Developers is a student community at VIT
          Vellore. We strive to bring about technological innovations among
          students and we do so by providing a platform for them to exhibit
          their talents. We are a group of passionate designers, developers and
          managers who work together to bring about collaborative results that
          better the lives of everyone around us.
        </p>
        <img
          src="COOL.svg"
          alt=""
          className="ml-10 mt-5 h-40 w-40 justify-self-center lg:absolute lg:right-20 lg:top-10 lg:h-60 lg:w-60 xl:right-36 xl:top-16 xl:h-80 xl:w-80"
        />
      </div>
    </div>
  )
}

export default AboutComponent
