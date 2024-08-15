import React from 'react'
import Landing from './Landing/page'
import Details from './Details/page'
import Customer from './Customer/page'
import Transform from './Transform/page'
import Footer from '../Footer/page'

const WaistWellness = () => {
  return (
    <main className='w-screen h-screen'>
            <Landing/>
            <Details/>
            <Customer/>
            <Transform/>
            <Footer/>
        </main>
  )
}

export default WaistWellness