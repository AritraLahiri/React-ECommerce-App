import React, { useContext } from 'react';
import { BsTrashFill } from 'react-icons/bs';

import { PhoneContext } from '../../Context';
import MyCart from '../../Components/Cart/MyCart';
import EmptyCart from '../../Components/EmptyCart/EmptyCart';

const Cart = () => {
	let subTotal = 0;

	const { cart, addToCart, removeFromCart, clearAllCart } = useContext(PhoneContext),
		tempCart = [ ...cart ],
		tax = 10,
		sortedCart = [ ...new Set(tempCart) ],
		allItems = sortedCart.map((items) => {
			let allImages = items.field.images[0];
			let productName = items.field.name;
			let price = items.field.price;
			let quantity = cart.filter((ele) => {
				return ele === items;
			}).length;
			let totalPrice = quantity * price;
			subTotal += totalPrice;

			return (
				<React.Fragment key={items.id}>
					<div className="cart-column-head">
						<img src={allImages} alt="productImg" className="product-image" />
					</div>
					<div className="cart-column-head">
						<h3 className="product-details">{productName}</h3>
					</div>
					<div className="cart-column-head">
						<h3 className="product-details"> &#8377;{price}</h3>
					</div>
					<div className="cart-column-head-quantity">
						<button className="btn-qt btn-remove" onClick={() => removeFromCart(items)}>
							-
						</button>
						<button className="btn-qt btn-qtn"> {quantity}</button>
						<button className="btn-qt btn-add" onClick={() => addToCart(items)}>
							+
						</button>
					</div>
					<div className="cart-column-head">
						<BsTrashFill onClick={() => removeFromCart(items)} className="cart-item-rem-icon" />
					</div>
					<div className="cart-column-head">
						<h3 className="product-details-total"> &#8377; {totalPrice}</h3>
					</div>
				</React.Fragment>
			);
		});

	const phoneItems = sortedCart.map((items) => {
		let phoneName = items.field.name;
		let originalPrice = items.field.price;
		let quantityInMobile = cart.filter((ele) => {
			return ele === items;
		}).length;
		let totalPrice = quantityInMobile * originalPrice;

		return (
			<React.Fragment key={items.id}>
				<div className="cart-column-head">
					<h3 className="product-details">{phoneName}</h3>
				</div>

				<div className="cart-summary">
					<div className="cart-column-head-quantity">
						<button className="btn-qt btn-remove" onClick={() => removeFromCart(items)}>
							-
						</button>
						<button className="btn-qt btn-qtn"> {quantityInMobile}</button>
						<button className="btn-qt btn-add" onClick={() => addToCart(items)}>
							+
						</button>
					</div>
					<div className="cart-column-head">
						<h3 className="product-details-total"> &#8377; {totalPrice}</h3>
					</div>
				</div>
			</React.Fragment>
		);
	});

	const componentToShow =
		cart.length > 0 ? (
			<MyCart cartItems={allItems} clear={clearAllCart} subTotal={subTotal} tax={tax} phoneItems={phoneItems} />
		) : (
			<EmptyCart />
		);

	return componentToShow;
};

export default Cart;
