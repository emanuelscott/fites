import React from 'react'
import Landing from './Landing/page'
import Details from './Details/page'
import Achieve from './Achieve/page'
import Footer from '../Footer/page'
import Customer from './Customer/page'


const PeakProgram = () => {
  return (
    <main className='2xl:w-screen xl:w-screen h-screen bg-black sm:w-[390px] overflow-x-hidden relative'>
        <Landing/>
        <Details/>
        <Customer/>
        <Achieve/>
        <Footer/>
    </main>
  )
}

export default PeakProgram