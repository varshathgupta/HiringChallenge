import { Container } from '@mui/material'
import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    
        <div className="navbarr">
          <div className="navbarr-inner">
            <div className="home">
              <h3 className="hometxt">Home</h3>
            </div>
            
              <input type="text" placeholder="Search"/>
              
          </div>

        </div>
    
  )
}
