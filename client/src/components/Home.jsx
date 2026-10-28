import React from 'react'
import MainBanner from './MainBanner'
import Categories from './Categories'
import BestSeller from './BestSeller'

function Home() {
  return (
    <div className='mt-5'>
        <MainBanner/>
        <Categories/>
        <BestSeller/>
    </div>
  )
}

export default Home