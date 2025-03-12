import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App