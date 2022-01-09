import { Link } from 'react-router-dom'
import React from 'react'
import Container from '../Container/Container'
import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <Container margin="true" size="large">
                <div className={styles.footer_container}>
                    <ul>
                        <Link to="/">Start</Link>
                        <Link to="/karte">Karte</Link>
                        <Link to="/kontakt">Kontakt</Link>
                        <Link to="/impressum">Impressum</Link>
                        <Link to="/dsv">Datenschutz</Link>
                    </ul>
                    <p>
                        © 2020 - {new Date().getFullYear()}, IchWillWerben UG, alle Rechte vorbehalten
                    </p>
                </div>
            </Container>
        </div>
    )
}
