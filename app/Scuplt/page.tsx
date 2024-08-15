import React from 'react'
import Landing from './Landing/page'
import Details from './Details/page'
import Customer from './Customer/page'
import Footer from '../Footer/page'
import Transform from './Transform/page'

const ScupltProgram = () => {
  return (
     <main className='w-screen h-scree'>
            <Landing/>
            <Details/>
            <Customer/>
            <Transform/>
            <Footer/>
        </main>
  )
}

export default ScupltProgram