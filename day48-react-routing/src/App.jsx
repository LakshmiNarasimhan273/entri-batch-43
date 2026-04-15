import React from 'react'
import Home from './pages/Home'
import Products from './pages/Products'
import Profile from './pages/Profile'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import NotFound from "./components/NotFound";
import Support from './pages/Support'

function App() {
  const userData = {
      name: "Narasimhan",
      role: "Developer",
      email: "narasimhan@developer.in",
      location: "Tamil Nadu, India",
      skills: "MERN Stack",
      bio: "AI enhanced FSD Mentor and passionate about Backend systems",
      image: "https://i.pinimg.com/736x/c5/df/67/c5df670a013d2643d0d16febd2624d9a.jpg",
      isOnline: true
  }
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/my-profile' element={<Profile user={userData} />} />
        <Route path='/support' element={<Support />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App