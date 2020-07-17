import React, { useContext } from 'react';
import { PhoneContext } from '../../Context';
import Product from '../Products/Product';
import Loading from '../Loading/Loading';

const Phone = () => {
	const { sortedPhones, loading } = useContext(PhoneContext);

	const allPhones = sortedPhones.map((phn) => {
		return <Product phone={phn.field} key={phn.id} />;
	});

	return (
		<section>
			<div className="products-center">{loading ? <Loading /> : allPhones}</div>
		</section>
	);
};

export default Phone;
