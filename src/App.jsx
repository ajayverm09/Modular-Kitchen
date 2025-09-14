import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import AboutPage from './Pages/About'
import BlogsPage from './Pages/Blogs'
import BlogPost from './Pages/BlogPost'
import ContactPage from './Pages/Contact'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/blogs' element={<BlogsPage/>}/>
          <Route path='/blog/:id' element={<BlogPost/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
