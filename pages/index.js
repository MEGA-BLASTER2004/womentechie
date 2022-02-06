import Head from 'next/head'
import Header from '../components/Header'
import Discord from '../components/Discord'
import RenderSpeaker from '../components/RenderSpeaker'
import Accordion from '../components/Accordion'
import { useState } from 'react'
import Router from 'next/router'

export default function Home() {
  const [showMenu, setShowMenu] = useState(false)
  const [navOpenAnimation, setNavOpenAnimation] = useState(false)
  const [navCloseAnimation, setNavCloseAnimation] = useState(false)
  return (
    <div>
      <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>
      <Header
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        setNavAnimation={setNavOpenAnimation}
      />
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

      {/* HOME COMPONENT */}

      <div
        id="Home"
        className="flex h-screen flex-col bg-techiesmall bg-cover bg-right-top bg-no-repeat sm:bg-techiemedium lg:bg-techie"
      >
        <div className=" my-10 mx-auto flex w-max flex-col justify-center space-y-4 text-rose-500 lg:my-28 lg:mx-44 lg:space-y-3">
          <div className="flex w-full flex-col items-center justify-center">
            <h1 className="text-4xl font-extrabold md:mr-3 md:text-7xl">
              WOMEN
            </h1>
            <h1 className="text-4xl font-extrabold md:text-7xl">TECHIES</h1>
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
            their talents. We are a group of passionate designers, developers
            and managers who work together to bring about collaborative results
            that better the lives of everyone around us.
          </p>

          <h1 className="mb-2 mt-8 text-purple-500">About VIT</h1>
          <p className="max-w-xs text-sm font-normal md:max-w-lg md:text-lg">
            DSC VIT powered by Google Developers is a student community at VIT
            Vellore. We strive to bring about technological innovations among
            students and we do so by providing a platform for them to exhibit
            their talents. We are a group of passionate designers, developers
            and managers who work together to bring about collaborative results
            that better the lives of everyone around us.
          </p>
          <img
            src="COOL.svg"
            alt=""
            className="ml-10 mt-5 h-40 w-40 justify-self-center lg:absolute lg:right-40 lg:top-16 lg:h-80 lg:w-80"
          />
        </div>
      </div>

      <div
        id="Hackathon"
        className="relative flex h-screen flex-col bg-hack bg-cover bg-right bg-no-repeat"
      >
        <div className="mt-20 self-end text-lg font-extrabold md:mr-60 md:mt-40 md:text-2xl">
          <h1 className="mb-2 text-pink-500">Hackathon</h1>
          <p className="max-w-xs text-sm font-normal md:max-w-md md:text-lg">
            This 24-hour hackathon aims to provide talented and independent
            women with the platform and resources to help them grow in their
            desired field and contribute to society with impactful and
            beneficial solutions.
          </p>
          <p className="max-w-xs pt-4 text-sm font-normal md:max-w-md md:text-lg">
            <span className="font-bold">
              There is a minimum requirement of 50% female participation in each
              team
            </span>
            , to ensure and promote womens participation in tech and
            tech-related events.
          </p>
          <p className="max-w-xs pt-4 text-sm font-normal md:max-w-md md:text-lg">
            WomenTechies will be an opportunity for the budding developers to
            showcase their potential and skills under the mentorship of experts
            and come up with imperceptible ideas and ground-breaking solutions
            to problems that could potentially solve the woes of thousands of
            people.
          </p>
          <img
            src="HACKER.svg"
            alt=""
            className="ml-10 h-40 w-40 lg:absolute lg:left-48 lg:top-36 lg:h-96 lg:w-96"
          />
        </div>
      </div>
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
            Knowing that our efforts benefit so many talented women and being
            able to see the satisfaction on our participant{"'"}s faces makes
            all of us extremely proud in the work that we do.
          </p>
          <img
            src="VISIONARY.svg"
            alt=""
            className="mt-8 h-40 w-40 lg:absolute lg:right-28 lg:top-8 lg:h-96 lg:w-96"
          />
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center space-y-10 bg-pink-200 py-10">
        <h1 className="border-b-4 border-pink-600 p-1 text-3xl font-bold text-pink-600">
          Timeline
        </h1>
        <div className="ml-5 flex space-x-6 self-start p-5">
          <button className="border-b border-pink-600 text-2xl font-bold text-pink-600">
            Day 1
          </button>
          <button className="border-b border-transparent text-2xl font-bold text-pink-400 duration-150 hover:text-pink-600">
            Day 2
          </button>
        </div>
        <img
          src="/TIMELINE.svg"
          alt="timeline"
          className="mx-auto self-center"
        />
      </div>
      <div className="mt-10 flex flex-col items-center">
        <h1 className="border-b-2 border-purple-500 text-3xl font-bold text-purple-500">
          Speakers
        </h1>
        <div className="mt-10 grid w-fit grid-cols-1 space-y-6 px-2 md:grid-cols-3 md:gap-16 md:space-y-0">
          <RenderSpeaker
            colour={'purple'}
            bg={'bg-purple-200'}
            border={'border-purple-500'}
            name={'Elon Musk'}
            description={
              'On how to warm Mars up to make it hospitable for humans: “The fast way is to drop thermonuclear weapons over the poles.”'
            }
            imgSrc={'/ELON.jpeg'}
          />
          <RenderSpeaker
            colour="orange"
            bg={'bg-orange-200'}
            border={'border-orange-500'}
            name={'Jeff Bezos'}
            description={`“If you double the number of experiments you do per year you're going to double your inventiveness.” - Jeff Bezos`}
            imgSrc={'/JEFF.jpg'}
          />
          <RenderSpeaker
            colour="pink"
            bg={'bg-pink-200'}
            border={'border-pink-500'}
            name={'Albert Einstein'}
            description={
              '"It gives me great pleasure indeed to see the stubbornness of an incorrigible nonconformist warmly acclaimed."'
            }
            imgSrc={'/ALBERT.jpg'}
          />
        </div>
      </div>
      <div id="Sponsors" className="mt-10 flex flex-col items-center">
        <h1 className="border-b-2 border-orange-500 text-3xl font-bold text-orange-500">
          Past Sponsors
        </h1>
        <div className="mt-10 grid w-fit grid-cols-2 place-content-center justify-items-center space-y-10 px-3 md:grid-cols-4 md:gap-8 md:space-y-0">
          <img src="/BUGSEE.png" alt="BugSee" className="h-16" />
          <img src="/CLOUDSPLOIT.png" alt="Cloid Sploit" className="h-16" />
          <img src="/BALASAMIQ.png" alt="BalaSamiq" className="h-16" />

          <img src="/JETBRAINS.png" alt="Jet Brains" className="h-16" />
          <img src="/SKETCH.png" alt="Sketch" className="h-16" />
          <img src="/NKCC.png" alt="NKCC" className="h-16" />
          <img src="/SEAPORT.png" alt="Seaport AI" className="h-16" />
          <img src="/GOEL.png" alt="GOEL" className="h-16" />
          <img
            src="/CMR.png"
            alt="CMR"
            className="col-span-2 h-16 md:col-span-4"
          />
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center">
        <h1 className="mb-10 border-b-2 border-purple-500 text-3xl font-bold text-purple-500">
          FAQ's
        </h1>
        <Accordion />
      </div>
      <div className="sticky bottom-0 flex justify-end px-4 py-5">
        <img
          src="/DISCORD.svg"
          alt=""
          className="h-20 w-20 scale-90 cursor-pointer rounded-3xl object-cover opacity-50 duration-100 hover:scale-105 hover:opacity-100 active:scale-95"
        />
      </div>
    </div>
  )
}
