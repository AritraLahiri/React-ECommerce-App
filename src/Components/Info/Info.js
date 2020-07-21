import React from 'react';
import SmallButtton from '../SmallButton/SmallButtton';
const Info = (props) => {
	return (
		<section className="single-phone">
			<div className="single-images">{props.singleImages}</div>

			<div className="phone-info">
				<div className="left-info">
					<h2>details</h2>
					<p>{props.description}</p>
				</div>
				<div className="right-info">
					<h2 className="rightinfo-head">info</h2>
					<div className="specs-cont">
						<h6>Price: Rs {props.price} </h6>
						<h6>Ram: {props.RAM} GB</h6>
						<h6>delivery: {props.freeDelivery ? 'free' : '50'}</h6>
						<h6>Warranty: {props.Warranty} years </h6>
					</div>
				</div>
			</div>

			<div className="extras-section">
				<h2>extras</h2>
				<div className="phone-extras">{props.phoneExtras}</div>
			</div>

			<div className="cart-section">
				<SmallButtton name="add to cart" classStyle="cart-btn" addCart={() => props.cart(props.phones)} />
			</div>
		</section>
	);
};

export default Info;
