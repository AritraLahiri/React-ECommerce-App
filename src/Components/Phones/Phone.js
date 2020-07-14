import React, { useContext } from 'react';
import { PhoneContext } from '../../Context';
import Product from '../Products/Product';

const Phone = () => {
	const { sortedPhones } = useContext(PhoneContext);
	// console.log('In the gadgets page', phones);

	const allPhones = sortedPhones.map((phn) => {
		return <Product phone={phn.field} key={phn.id} />;
	});

	return (
		<section>
			<div className="products-center">{allPhones}</div>
		</section>
	);
};

export default Phone;
