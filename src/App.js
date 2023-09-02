
import React from 'react'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Header from './layouts/Header'
import Footer from './layouts/Footer'
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
