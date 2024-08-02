import React from 'react'
import Vigor from './Vigor/page'
import Highlights from './Highlights/page'
import Recovery from './Recovery/page'
import Vitality from './Vitality/page'
import Functional from './Functional/page'

const VigorPackage = () => {
  return (
    <div>
        <Vigor/>
        <Highlights/>
        <Functional/>
        <Recovery/>
        <Vitality/>
    </div>
  )
}

export default VigorPackage