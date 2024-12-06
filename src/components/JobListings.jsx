import React from 'react'
import {useState, useEffect} from 'react'
import JobListing from './JobListing'
import Spinner from './Spinner'

const JobListings = ({ limit }) => {    
    // const recentJobs = jobs.slice(0, limit || jobs.length)
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const fetchJobs = async () => {
        try {
          const res = await fetch('http://localhost:5000/jobs')
          const data = await res.json()
          setJobs(data.slice(0, limit || data.length))
        } catch (err) {
          console.log('Error fetching data', err)
        } finally {
          setLoading(false)
        }
      }

      fetchJobs()
    }, [])
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          { loading ? (<h2> <Spinner color={'#ffffff'} loading={loading} /> </h2>) : (
            <>
            { jobs.map((job) => (
                <JobListing key={job.id} job={job} />
            )) }
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default JobListings