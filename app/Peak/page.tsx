import React from 'react'
import Landing from './Landing/page'
import Details from './Details/page'
import Achieve from './Achieve/page'
import Footer from '../Footer/page'

const PeakProgram = () => {
  return (
    <main className='w-screen h-screen'>
        <Landing/>
        <Details/>

        <Achieve/>
        <Footer/>
    </main>
  )
}

export default PeakProgram