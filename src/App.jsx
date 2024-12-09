import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import JobPage, { jobLoader } from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={ <MainLayout /> } >
      <Route index element={ <HomePage /> } />
      <Route path='/jobs' element={ <JobsPage /> } />
      <Route path='/job/:id' element={ <JobPage /> } loader={jobLoader} />
      <Route path='/add-job' element={ <AddJobPage /> } />
      <Route path='*' element={ <NotFoundPage /> } />
    </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default App