import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../context/ThemeContext'


function Navbar() {

    const [theme] = useContext(ThemeDataContext)
    
    return (
        <div className={theme}>
            <h2>Heading</h2>
            <Nav2 />
        </div>
    )
}

export default Navbar
