import React from 'react'
import './home.css'
import NavBar from './nav/NavBar'
import HomeBody from './HomeBody'

function Home() {
  return (
    <div className='home'>
        <NavBar />

        <HomeBody />
    </div>
  )
}

export default Home