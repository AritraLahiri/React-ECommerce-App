import React from 'react';
import Button from '../Button/Button';

const Banner = (props) => {
	return (
		<div className="Banner">
			<h5 className="banner-head">{props.heading}</h5>
			<p className="banner-subtitle">{props.subHeading}</p>
			<Button to={props.to} classStyle="btn">
				{props.btnName}
			</Button>
		</div>
	);
};

export default React.memo(Banner);
