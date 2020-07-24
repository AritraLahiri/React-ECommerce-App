import React, { useContext } from 'react';
import { PhoneContext } from '../../Context';
import Featured from '../../Components/Featured/Featured';
import SearchNotFound from '../../Components/SearchNotFound/SearchNotFound';

const SearchPage = () => {
	const { searchResult } = useContext(PhoneContext);

	const productsFound =
		searchResult.length > 0 ? (
			<Featured typeOfPhone={searchResult} heading={searchResult.length === 8 ? 'people also searched' : ''} />
		) : (
			<SearchNotFound />
		);

	return productsFound;
};

export default SearchPage;
