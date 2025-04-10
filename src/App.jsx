import React from 'react'
import UserLayout from './components/Layout/UserLayout';
import Home from './components/pages/Home';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLayout/>}>
        
      </Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App