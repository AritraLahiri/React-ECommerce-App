import React, { useState } from 'react';
import Navitems from './NavItems/Navitems';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Nav() {
	const [ Nav, setNav ] = useState({
		isOpen: false
	});

	const navToggleHandler = () => {
		setNav({ isOpen: !Nav.isOpen });
	};

	return (
		<div className="container">
			<div className="Logo">
				<h2>
					flash<span className="logo-head">STORE</span>
				</h2>
				<FaBars className="toggler" onClick={navToggleHandler} />
			</div>
			<div className={Nav.isOpen ? 'close' : 'Links'}>
				<Link to="/">
					<Navitems>Home</Navitems>
				</Link>
				<Link to="/gadget">
					<Navitems>Gadgets</Navitems>
				</Link>
			</div>
		</div>
	);
}

export default Nav;
