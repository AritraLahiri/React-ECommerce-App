import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
const SmallButtton = ({ name, to, addCart, classStyle }) => {
	return (
		<Link to="#" className={classStyle} onClick={addCart}>
			{name}
			<FiShoppingCart className="cart-btn-icon" />
		</Link>
	);
};

export default SmallButtton;
