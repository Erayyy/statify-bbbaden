import React from 'react'
import logo from '../images/Logo_Green.png'
import '../css/Logo.css'

export const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} alt="logo" />
            <h1>Statify</h1>
        </div>
    )
}