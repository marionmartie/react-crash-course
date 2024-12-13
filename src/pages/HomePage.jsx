import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'

const HomePage = () => {
  return (
    <>
        <Hero />
        <HomeCards />
        <JobListings limit={3} />
    </>
  )
}

export default HomePage