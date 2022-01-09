import React from 'react'
import Navbar from './Navbar'

import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import BrandIcon from '../Icon/BrandIcon'

export default function IwwNavbar() {
    function handleOnClick() {
        window.location.href = "https://cms.ichwillwerben.de";  
    }
    
    return (
        <Navbar>
            <ul>
                <Link to="/"><BrandIcon /></Link>
                <Link to="/">Start</Link>
                <Link to="/karte">Karte</Link>
                <Link to="/kontakt">Kontakt</Link>
            </ul>
            <ul>
                <Link to="/impressum">Impressum</Link>
                <Button onClick={handleOnClick}>Login</Button>
            </ul>
        </Navbar>
    )
}
