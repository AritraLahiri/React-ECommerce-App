import React from 'react';
import Button from '../Button/Button';

import { MdRemoveShoppingCart } from 'react-icons/md';

const EmptyCart = () => {
	return (
		<div className="empty-cart">
			<MdRemoveShoppingCart className="empty-cart-icon" />
			<h1>your cart is empty</h1>
			<Button to="/phone" classStyle="btn">
				continue shopping
			</Button>
		</div>
	);
};

export default EmptyCart;
