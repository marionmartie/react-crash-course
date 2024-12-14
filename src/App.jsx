import { Route, createRoutesFromElements, RouterProvider, createBrowserRouter } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import NotFound from "./pages/NotFound"
import JobsPage from "./pages/JobsPage"
import JobPage, { jobLoader } from "./pages/JobPage"
import AddJobPage from "./pages/AddJobPage"

function App() {
  const addJob = async ( newJob ) => {
    const res = await fetch('/api/jobs', {
      method: POST,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob)
    })

    return
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={ <MainLayout /> }>
      <Route index element={ <HomePage /> } />
      <Route path="/jobs" element={ <JobsPage /> } />
      <Route path="/jobs/:id" element={ <JobPage /> } loader={jobLoader} />
      <Route path="/add-job" element={ <AddJobPage addJobSubmit={addJob} /> } />


      <Route path="*" element={ <NotFound /> } />
    </Route>)
  )
  return <RouterProvider router={router} />
}

export default App
