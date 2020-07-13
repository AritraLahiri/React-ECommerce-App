import React from 'react';

const UI = (props) => {
	return (
		<section className={props.show ? 'sort' : 'sort-close'}>
			<form className="form">
				<div className="form-group">{props.children}</div>
			</form>
		</section>
	);
};

export default UI;
