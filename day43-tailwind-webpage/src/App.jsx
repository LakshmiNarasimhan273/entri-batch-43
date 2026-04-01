import React from 'react'
import ProfileCard from './components/ProfileCard'

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

  const nextUser = {
      name: "Lakshmi Narasimhan",
      role: "Tester",
      email: "lakshminarasimhan@tester.in",
      location: "Thrissur, Kerala",
      skills: "Automation Testing",
      bio: "AI enhanced Automation Tester with Java & Selenium",
      image: "https://i.pinimg.com/736x/91/53/5b/91535bc90a800b532116028457cdd0f9.jpg",
      isOnline: true
  }


  return (
    <div className='min-h-screen bg-gray-100 flex gap-4 items-center justify-center'>
      <ProfileCard user={userData} />
      <ProfileCard user={nextUser} />
      <ProfileCard user={nextUser} />
    </div>
  )
}

export default App