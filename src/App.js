
import React from 'react'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Faq from './components/Faq'
import Contact from './components/Contact'
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/faq' element={<Faq />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
