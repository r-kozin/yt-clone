import React from 'react'
import Feed from '../../Components/Feed/Feed'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
        <Feed />
    </div>
  )
}

export default Home