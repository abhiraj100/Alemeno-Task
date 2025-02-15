import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Navbar from './components/Navabar/Navbar'
import Dashboard from './pages/Dashboard'
import { Toaster } from 'sonner'

const App = () => {
  return (
    < > 
      <Toaster/>
      <Navbar/>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path={'/courses/:id'} element={<CourseDetail/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes> 
    </>
  )
}

export default App
