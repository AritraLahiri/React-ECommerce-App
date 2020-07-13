import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
	return (
		<Link className={props.classStyle} to={props.to}>
			{props.children}
		</Link>
	);
};

export default Button;
