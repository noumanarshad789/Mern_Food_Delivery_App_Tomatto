import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Order from './pages/Orders/Orders'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const backend_URL = "http://localhost:4000"
  return (
    <>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path='/add' element={<Add backend_URL={backend_URL} />} />
          <Route path='/list' element={<List backend_URL={backend_URL} />} />
          <Route path='/orders' element={<Order />} />
        </Routes>
      </div>

    </>
  )
}

export default App
