import React from 'react'
import Landing from './Landing/page'
import Details from './Details/page'
import Customer from './Customer/page'
import Transform from './Transform/page'
import Footer from '../Footer/page'

const WaistWellness = () => {
  return (
    <main className='2xl:w-screen xl:w-screen h-screen bg-black sm:w-[390px] overflow-x-hidden relative'>
            <Landing/>
            <Details/>
            <Customer/>
            <Transform/>
            <Footer/>
        </main>
  )
}

export default WaistWellness