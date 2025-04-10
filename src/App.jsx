import React from 'react'
import UserLayout from './components/Layout/UserLayout';
import UserLayout from './components/Layout/UserLayout'
import Home from './components/pages/Home'

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