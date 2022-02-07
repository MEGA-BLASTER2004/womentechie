import React from 'react'
import Router from 'next/router'

function MobileNav({
  setNavOpenAnimation,
  setNavCloseAnimation,
  setShowMenu,
  showMenu,
  navCloseAnimation,
  navOpenAnimation,
}) {
  return (
    <div
      className={`${
        showMenu ? 'flex bg-rose-50 md:hidden' : 'hidden'
      } sticky top-0 bottom-0 z-40 h-screen w-screen flex-col items-center justify-center space-y-6 ${
        navOpenAnimation ? 'animate-navopen' : ''
      } ${navCloseAnimation ? 'animate-navclose' : ''}`}
      onAnimationEnd={() => {
        setNavOpenAnimation(false)
        setNavCloseAnimation(false)
      }}
    >
      <button
        onClick={() => {
          Router.push('#Home')
          setNavCloseAnimation(true)
          setTimeout(() => {
            setShowMenu(false)
            setNavCloseAnimation(false)
          }, 500)
        }}
        className="w-32 rounded-lg bg-rose-200 px-4 py-2 text-rose-600"
      >
        Home
      </button>
      <button
        onClick={() => {
          Router.push('#About')
          setNavCloseAnimation(true)
          setTimeout(() => {
            setShowMenu(false)
            setNavCloseAnimation(false)
          }, 500)
        }}
        className="w-32 rounded-lg bg-rose-200 px-4 py-2 text-rose-600"
      >
        About DSC
      </button>
      <button
        onClick={() => {
          Router.push('#Hackathon')
          setNavCloseAnimation(true)
          setTimeout(() => {
            setShowMenu(false)
            setNavCloseAnimation(false)
          }, 500)
        }}
        className="w-32 rounded-lg bg-rose-200 px-4 py-2 text-rose-600"
      >
        Hackathon
      </button>
      <button
        onClick={() => {
          Router.push('#Vision')
          setNavCloseAnimation(true)
          setTimeout(() => {
            setShowMenu(false)
            setNavCloseAnimation(false)
          }, 500)
        }}
        className="w-32 rounded-lg bg-rose-200 px-4 py-2 text-rose-600"
      >
        Vision
      </button>
      <button
        onClick={() => {
          Router.push('#Sponsors')
          setNavCloseAnimation(true)
          setTimeout(() => {
            setShowMenu(false)
            setNavCloseAnimation(false)
          }, 500)
        }}
        className="w-32 rounded-lg bg-rose-200 px-4 py-2 text-rose-600"
      >
        Sponsors
      </button>
      <button
        className="rounded-lg bg-red-500 px-4 py-2 text-white"
        onClick={() => {
          setNavCloseAnimation(true)
          setTimeout(() => {
            setShowMenu(false)
            setNavCloseAnimation(false)
          }, 500)
        }}
      >
        X
      </button>
    </div>
  )
}

export default MobileNav
