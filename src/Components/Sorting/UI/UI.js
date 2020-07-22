import React from 'react';

const UI = (props) => {
	return (
		<section className="sort">
			<form className="form">
				<div className="form-group">{props.children}</div>
			</form>
		</section>
	);
};

export default UI;
