import React from 'react';

function Navitems(props) {
	return (
		<React.Fragment>
			<h5 className="nav-items">{props.children}</h5>
		</React.Fragment>
	);
}

export default Navitems;
