import React from 'react'

function RenderSpeaker({ name, description, colour, imgSrc, bg, border }) {
  return (
    <div
      className={`flex flex-col items-center space-y-10 rounded-xl ${bg} px-4 py-10`}
    >
      <img
        src={imgSrc}
        alt={name}
        className={`h-28 w-28 rounded-full border-2 ${border} object-cover`}
      />
      <h3 className={`font-extrabold text-${colour}-500`}>{name}</h3>
      <p className="w-52 text-center text-sm font-bold text-gray-700">
        {description}
      </p>
    </div>
  )
}

export default RenderSpeaker
