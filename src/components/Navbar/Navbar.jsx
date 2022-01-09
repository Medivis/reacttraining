import React from 'react';
import styles from './Navbar.module.scss'
import Container from '../Container/Container.jsx'
import { Link } from 'react-router-dom';
import BrandIcon from '../Icon/BrandIcon';
import { useHistory } from 'react-router-dom';

export default function Navbar(props) {

	const [isOpen, setIsOpen] = React.useState(false);

	const [Location, setLocation] = React.useState();
	const history = useHistory();

	history.listen( (location) => {
		if (location.pathname !== Location) {
			setLocation(location.pathname);
			setIsOpen(false);
		}
	})

	return (
		<>
			<div className={styles.navbar_wrapper}>
				<div className={styles.top}>
					<Container size="large" margin="sides">
						<a href="tel:+49629857-86">Tel.: +49 (30) 629857-86</a>
						<a href="mailto:info@ichwillwerben.de">E-mail: info@ichwillwerben.de</a>
					</Container>
				</div>
				<div className={styles.navbar}>
					<Container size="large" >
						{/* Navbar for Desktop */}
						<nav className={styles.desktop}>
							{props.children}
						</nav>
						{/* Navbar for Mobile */}
						<nav className={styles.mobile}>
							<ul>
								<Link to="/"><BrandIcon/></Link>
							</ul>
							<ul>
								<button
									onClick={() => setIsOpen(isOpen => !isOpen)}
									className={`${styles.burger} ${isOpen ? styles.active : ""}`}>
									<div className={styles.line1}></div>
									<div className={styles.line2}></div>
									<div className={styles.line3}></div>
								</button>
							</ul>
						</nav>
					</Container>
				</div>
				{/* Navbar overlay for mobile */}
				<nav className={`${styles.menu_overlay} ${isOpen ? styles.active : ""}`}>
					{props.children}
				</nav>
			</div>
		</>
	)
}
