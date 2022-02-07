import Head from 'next/head'
import Header from '../components/Header'
import Discord from '../components/Discord'
import RenderSpeaker from '../components/RenderSpeaker'
import Accordion from '../components/Accordion'
import { useState } from 'react'
import Router from 'next/router'
import HomeComponent from '../components/Home'
import AboutComponent from '../components/About'
import HackathonComponent from '../components/Hackathon'
import VisionComponent from '../components/Vision'
import MobileNav from '../components/MobileNav'

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

      <MobileNav
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        navOpenAnimation={navOpenAnimation}
        navCloseAnimation={navCloseAnimation}
        setNavOpenAnimation={setNavOpenAnimation}
        setNavCloseAnimation={setNavCloseAnimation}
      />

      {/* HOME COMPONENT */}
      <HomeComponent />
      {/* ABOUT COMPONENT */}
      <AboutComponent />
      {/* HACKATHON COMPONENT */}
      <HackathonComponent />
      {/* VISION COMPONENT */}
      <VisionComponent />
      <div className="mt-20 flex flex-col items-center space-y-10 bg-pink-200 py-10">
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
      <div className="mt-20 flex flex-col items-center">
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
      <div id="Sponsors" className="mt-20 flex flex-col items-center">
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
      <div className="mt-20 flex flex-col items-center">
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
