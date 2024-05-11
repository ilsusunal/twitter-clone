import { useState } from 'react'
import './App.css'
import SideBar from "./components/SideBar"
import Feed from "./components/Feed"
import Widgets from "./components/Widgets"

function App() {
  

  return (
    <>
    <div className='mx-auto lg:max-w-6xl  overflow-hidden'>
      <main  className="grid grid-cols-9 max-h-screen">
        <SideBar/>
        <Feed/>
        <Widgets/>
      </main>
    </div>
    
    </>
  )
}

export default App
