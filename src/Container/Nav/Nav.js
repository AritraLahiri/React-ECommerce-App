import React, { useState } from 'react';
import Navitems from './NavItems/Navitems';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
function Nav({ cart }) {
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
				<Link to="/phone">
					<Navitems>Phones</Navitems>
				</Link>
				<Link to="/gadget/checkout">
					<Navitems>
						<FiShoppingCart className="cart-icon" />
						<span className={cart.length > 0 ? 'cart-items-span' : ''}>
							{cart.length > 0 ? cart.length : null}
						</span>{' '}
					</Navitems>
				</Link>
			</div>
		</div>
	);
}

export default React.memo(Nav);
