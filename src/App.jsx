import { useState } from 'react'
import './App.css'
import SideBar from "./components/SideBar"
import EnterPage from "./components/EnterPage"
import Feed from "./components/Feed"
import Widgets from "./components/Widgets"
import { Route, Switch } from 'react-router-dom'

function App() {
  

  return (
    <>
    <div className='mx-auto lg:max-w-6xl  overflow-hidden'>
      <main  className="grid grid-cols-9 max-h-screen">
        <Switch>
          <Route path="/" exact>
            <EnterPage/>
          </Route>
          <Route path="/home">
            <SideBar/>
            <Feed/>
            <Widgets/>
          </Route>
          <Route path="/user">

          </Route>
        </Switch>
      </main>
    </div>
    </>
  )
}

export default App
