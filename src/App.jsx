import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import UserLayout from './components/Layout/UserLayout'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLayout/>}>
        < Route index element={<Home/>}/>
      </Route>
      <Route> {/*Andmin Layout*/}  </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App