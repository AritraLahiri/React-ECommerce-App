import React, { useContext } from 'react';
import Title from '../Title/Title';
import Product from '../Products/Product';
import { PhoneContext } from '../../Context';
import Loading from '../Loading/Loading';

const Featured = ({ typeOfPhone, heading }) => {
	const { loading } = useContext(PhoneContext);

	const featureProducts = typeOfPhone.map((product) => {
		return <Product phone={product.field} key={product.id} />;
	});

	return (
		<section className="featured">
			<Title>{heading}</Title>
			<div className="products-center">{loading ? <Loading /> : featureProducts}</div>
		</section>
	);
};

export default Featured;
