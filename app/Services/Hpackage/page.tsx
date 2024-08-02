import React from 'react'
import Heatingup from './Heatingup/page'
import Highlights from './Highlights/Highlight2/page'
import Metabolic from './Metabolic/page'
import Nutrition from './Nutrition/page'
import Metabolism from './Metabolism/page'
import Footer from '@/app/Footer/page'

const HeatingupPackage = () => {
  return (
    <div>
      <Heatingup />
      <Highlights />
      <Metabolic/>
      <Nutrition/>
      <Metabolism/>
      <Footer/>
    </div>
  )
}

export default HeatingupPackage