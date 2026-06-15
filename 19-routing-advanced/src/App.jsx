import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/notFound'
import ContactAdmin from './pages/ContactAdmin'
import ContactDeveloper from './pages/ContactDeveloper'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/courses' element={<Courses />} />
        {/* Dynamic Routing */}
        <Route path='/courses/:id' element={<CourseDetail/>} />

        {/* Nested routing */}
        <Route path='/contact' element={<Contact/>}>
          <Route path='admin' element={<ContactAdmin/>}/>
          <Route path='developer' element={<ContactDeveloper/>}/>
        </Route>

        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
