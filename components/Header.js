import React, { useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router'

const RenderButton = ({ text, num, nav }) => {
  const selected = nav[num]
  return (
    <button
      onClick={() => {
        Router.push(`#${text != 'About DSC' ? text : 'About'}`)
      }}
      className={`${
        selected
          ? 'border-b-4 border-rose-500 text-rose-500'
          : 'border-b-4 border-transparent text-gray-600 hover:border-red-500 hover:text-gray-900'
      } h-full font-semibold duration-150`}
    >
      {text}
    </button>
  )
}

function Header({ setShowMenu, showMenu, setNavAnimation }) {
  const [nav, setNav] = useState([1, 0, 0, 0, 0])
  const transitionNavBar = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 0 && window.scrollY <= 620) {
      setNav([1, 0, 0, 0, 0])
    }
    if (window.scrollY >= 621 && window.scrollY < 930) {
      setNav([0, 1, 0, 0, 0])
    }
    if (window.scrollY >= 931 && window.scrollY <= 1650) {
      setNav([0, 0, 1, 0, 0])
    }
    if (window.scrollY >= 1651 && window.scrollY <= 2380) {
      setNav([0, 0, 0, 1, 0])
    }
    if ((window, scrollY >= 2381 && window.scrollY <= 3619)) {
      setNav([0, 0, 0, 0, 0])
    }
    if (window.scrollY > 3620) {
      setNav([0, 0, 0, 0, 1])
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar)
  }, [])
  return (
    <div className="sticky top-0 z-50 flex w-screen justify-between bg-gray-50 shadow-lg">
      <img
        src="/GDSC.png"
        alt="GDSC"
        className="mx-3 my-3 h-8 md:mx-5 md:my-5 md:h-12"
      />
      <div className="flex md:hidden">
        <button
          className={`mx-5 text-3xl ${
            showMenu ? 'opacity-0' : 'opacity-100'
          } duration-150`}
          onClick={() => {
            setShowMenu(!showMenu)
            setNavAnimation(true)
          }}
        >
          =
        </button>
      </div>
      <div className="mx-3 hidden space-x-6 md:mx-5 md:flex">
        <RenderButton text={'Home'} num={0} nav={nav} />
        <RenderButton text={'About DSC'} num={1} nav={nav} />
        <RenderButton text={'Hackathon'} num={2} nav={nav} />
        <RenderButton text={'Vision'} num={3} nav={nav} />
        <RenderButton text={'Sponsors'} num={4} nav={nav} />
      </div>
    </div>
  )
}

export default Header
