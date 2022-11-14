import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sidebar from './component/sidebar'
import Contact from './screen/contact'
import Favorites from './screen/favorites'
import General from './screen/general'
import IndividualAbility from './screen/individualAbility'


export default function App() {
  return (
    <div className='main-body'>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path='/' element={<General />} />
          <Route path='/individualAbility' element={<IndividualAbility />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
