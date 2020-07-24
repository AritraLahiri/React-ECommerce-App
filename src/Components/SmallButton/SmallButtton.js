import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { BsPlayFill } from 'react-icons/bs';

const SmallButtton = ({ name, to, addCart, classStyle }) => {
	const logo = to === '#' ? <FiShoppingCart className="cart-btn-basket" /> : <BsPlayFill className="cart-btn-icon" />;

	return (
		<Link to={to} className={classStyle} onClick={addCart}>
			{name}
			{logo}
		</Link>
	);
};

export default SmallButtton;
