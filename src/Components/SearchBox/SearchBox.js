import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PhoneContext } from '../../Context';
import { BsSearch } from 'react-icons/bs';

const SearchBox = () => {
	const clearInputRef = useRef(null);

	const clearSearch = () => {
		clearInputRef.current.value = '';
	};

	const { searchPhones } = useContext(PhoneContext);

	const getValueFromUser = (e) => {
		const searchParameter = e.target.value;
		searchPhones(searchParameter);
	};

	return (
		<section className="search-section">
			<div className="search">
				<BsSearch className="search-logo" />
				<div className="input">
					<Link to="/search">
						<input
							ref={clearInputRef}
							onBlur={clearSearch}
							type="text"
							className="search-input"
							onChange={(event) => getValueFromUser(event)}
							placeholder="Search for products, brands and more"
						/>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default SearchBox;
