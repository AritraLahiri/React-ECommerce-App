import React from 'react';
import { FaDizzy } from 'react-icons/fa';

const SearchNotFound = () => {
	return (
		<div className="search-not-found">
			<FaDizzy className="search-not-found-icon" />
			<h1>No Products Found</h1>
		</div>
	);
};

export default SearchNotFound;
