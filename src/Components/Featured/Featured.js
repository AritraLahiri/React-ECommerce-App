import React, { useContext } from 'react';
import Title from '../Title/Title';
import Product from '../Products/Product';
import { PhoneContext } from '../../Context';

const Featured = () => {
	const { featured } = useContext(PhoneContext);
	// console.log(featured);

	const featureProducts = featured.map((product) => {
		return <Product phone={product.field} key={product.id} />;
	});

	return (
		<section className="featured">
			<Title>featured products</Title>
			<div className="products-center">{featureProducts}</div>
		</section>
	);
};

export default Featured;
