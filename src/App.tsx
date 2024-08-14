import { useState } from 'react'
import About from './about'
import GirlSSecction from './girlsSection1'
import Girl1 from './girls1'
import Girl2 from './girls2'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <About/>
     {/* <GirlSSecction/> */}
     {/* <Girl1/> */}
     {/* <Girl2/> */}
    </>
  )
}

export default App
