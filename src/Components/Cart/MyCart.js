import React from 'react';

const MyCart = ({ cartItems, clear, subTotal, tax }) => {
	return (
		<section className="my-cart">
			<div className="cart-header">
				<h3 className="cart-head">
					your <span className="cart"> cart </span>
				</h3>
			</div>
			<div className="cart-body">
				<div className="cart-column-head">
					<h3 className="column-name">products</h3>
				</div>
				<div className="cart-column-head">
					<h3 className="column-name">name</h3>
				</div>
				<div className="cart-column-head">
					<h3 className="column-name">price</h3>
				</div>
				<div className="cart-column-head">
					<h3 className="column-name">quantity</h3>
				</div>
				<div className="cart-column-head">
					<h3 className="column-name">remove</h3>
				</div>
				<div className="cart-column-head">
					<h3 className="column-name">total</h3>
				</div>
			</div>
			<div className="cart-body">{cartItems}</div>

			<div className="total">
				<div className="clear-btn">
					<button onClick={clear}>clear cart</button>
				</div>
				<div className="sub-total">
					<h2 className="total-tag"> subtotal :</h2>
					<h2 className="total-price">&#8377; {subTotal}</h2>
					<h2 className="total-tag"> tax :</h2> <h2 className="total-price">&#8377; {tax}</h2>
					<h2 className="total-tag"> total : </h2>
					<h2 className="total-price">&#8377; {subTotal + tax}</h2>
				</div>
			</div>
		</section>
	);
};

export default MyCart;
