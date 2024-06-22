import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './NavbarAdmin'
function RootLayout() {
  return (
    <div>
        <Navbar/>
        <div style = {{minHeight:"120vh"}}>
            <Outlet/>
        </div>
    </div>
  )
}

export default RootLayout