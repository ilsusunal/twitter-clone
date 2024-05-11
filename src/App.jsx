import { useState } from 'react'
import './App.css'
import SideBar from "./components/SideBar"
import Feed from "./components/Feed"
import Widgets from "./components/Widgets"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main  className="grid grid-cols-9">
      <section className="flex flex-col flex-end ml-16  ">
        <SideBar/>
      </section>
      <section className="grow border-x md:max-w-xl">
        <Feed/>
      </section>
      <section className="mr-16 ">
        <Widgets/>
      </section>
    </main>
    </>
  )
}

export default App
