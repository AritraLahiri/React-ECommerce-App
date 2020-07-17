import React, { useContext } from 'react';
import Button from '../Button/Button';
import Loading from '../Loading/Loading';
import { PhoneContext } from '../../Context';
const Product = (props) => {
	const { price, images, name, slug } = props.phone;
	const { loading } = useContext(PhoneContext);

	if (loading) {
		return <Loading />;
	} else {
		return (
			<article className="product-box">
				<div className="product-image">
					<img src={images[0]} alt="product" />
					<div className="price-top">
						<h6>&#8377; {price}</h6>
					</div>
					<Button to={`/gadget/${slug}`} classStyle="product-link btn">
						Details
					</Button>
				</div>
				<div className="product-name">{name} </div>
			</article>
		);
	}
};

export default Product;
