import React from 'react'
import {Outlet} from 'react-router-dom'
import Nav from './navbar/Nav'
import Footer from './footer/Footer'

function RootLayout() {
  return (
    <div>
        <div className='web-container'>
            <div className='pb-2'>
                <Nav/>
            </div>
            <div>
                <Outlet/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    </div>
  )
}

export default RootLayout