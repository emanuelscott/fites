import React from 'react'
import Landing from './Landing/page'
import Details from './Details/page'
import Customer from './Customer/page'
import Elevate from './Elevate/page'
import Footer from '../Footer/page'

const EnduranceProgram= () => {
  return (
    <main className='w-screen h-screen'>
        <Landing/>
        <Details/>
        <Customer/>
        <Elevate/>
        <Footer/>
    </main>
  )
}

export default EnduranceProgram