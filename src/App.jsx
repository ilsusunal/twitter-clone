import { useState } from 'react'
import './App.css'
import SideBar from "./components/SideBar"
import Feed from "./components/Feed"
import Widgets from "./components/Widgets"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main  className="bg-black md:flex md:justify-between m-4 ">
      <section className="ml-8 divide-white">
        <SideBar/>
      </section>
      <section className="">
        <Feed/>
      </section>
      <section className="">
        <Widgets/>
      </section>
    </main>
    </>
  )
}

export default App
