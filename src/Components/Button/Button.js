import React from 'react';

const Button = (props) => {
	return (
		<a className={props.classStyle} href={props.to}>
			{props.children}
		</a>
	);
};

export default Button;
