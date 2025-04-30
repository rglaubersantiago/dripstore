import {BrowserRouter, Routes, Route} from "react-router-dom"

import './App.css'

import HomePage from './pages/HomePage.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
