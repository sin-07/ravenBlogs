import React from 'react'
import MainSection from '../Components/MainSection'
import Navbar from '../Components/Navbar'
import BlogSection from '../Components/BlogSection'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <MainSection />
      <BlogSection/>
    </div>
  )
}

export default Home