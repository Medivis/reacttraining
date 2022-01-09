import React from 'react'
import Button from '../Button/Button'
import { Marker, Popup, } from 'react-leaflet'
import styles from './MapMarker.module.scss'
import { Link } from 'react-router-dom'

export default function MapMarker({ panel }) {

	const position = panel.location.split(', ');

	return (
		<Marker position={position} >
			<Popup className={styles.panel}>
				<h4>{panel.name}</h4>
				<p>{panel.address}</p>
				<Link to={`/buchen/${panel._id}`}>
					<Button>Jetzt Werbeslot buchen</Button>
				</Link>
			</Popup>
		</Marker>
	)
}
