import { Button, Card, List } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import MapListSlot from './MapListSlot';
import MapMarker from './MapMarker'
import MapWrapper from './MapWrapper'
import styles from './Map.module.scss'

export default function Map(props) {

	const [panels, setPanels] = useState([]);

	useEffect(() => {
		fetch('https://cms.ichwillwerben.de/api/v1/panels/map')
			.then(response => response.json())
			.then(data => {
				setPanels(data);
			});
	}, [])


	return (
		<>
			<div className={styles.map_container}>
				<MapWrapper {...props}>
					{panels.map(panel => (
						<MapMarker panel={panel} key={panel.name} />
					))}
				</MapWrapper>
				{props.showMenu &&
					<Card className={styles.list}>
						<List>
							{panels.map(panel => (
								<MapListSlot panel={panel} key={panel.name} />
							))}
						</List>
					</Card>
				}
			</div>
		</>
	)
}
