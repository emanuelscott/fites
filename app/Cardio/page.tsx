import React from 'react'
import Landing from './Landing/page'
import Details from './Details/page'
import Customer from './Customer/page'
import Elevate from './Elevate/page'
import Footer from '../Footer/page'

const CardioProgram = () => {
  return (
    <main className='2xl:w-screen xl:w-screen h-screen bg-black sm:w-[390px] overflow-x-hidden relative'>
        <Landing/>
        <Details/>
        <Customer/>
        <Elevate/>
        <Footer/>
    </main>
  )
}

export default CardioProgram