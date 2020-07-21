import React from 'react';
import { Link } from 'react-router-dom';

const SmallButtton = ({ name, to, addCart, classStyle }) => {
	return (
		<Link to="#" className={classStyle} onClick={addCart}>
			{name}
		</Link>
	);
};

export default SmallButtton;
