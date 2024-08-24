import React from 'react'

export default function Carousel ({ children: slides }) {
  return(
    <div className='overflow-hidden relative'>
      <div className='flex'>
      {slides}
      </div>
      <button>

      </button>
    </div>
  )
}