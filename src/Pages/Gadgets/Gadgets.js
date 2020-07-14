import React, { useContext } from 'react';
import Banner from '../../Components/Banner/Banner';
import StyledHero from '../../Components/StyledHero/StyleHero';
import phoneImg from '../../assets/phone4.png';
import Phone from '../../Components/Phones/Phone';
import Sorting from '../../Components/Sorting/Sorting';
import UI from '../../Components/Sorting/UI/UI';
import Title from '../../Components/Title/Title';
import { FcExpand } from 'react-icons/fc';
import { PhoneContext } from '../../Context';

function Gadgets() {
	const { isSortOpen, sortTogglerHandler } = useContext(PhoneContext);
	return (
		<React.Fragment>
			<StyledHero img={phoneImg}>
				<Banner heading="latest phones" to="/" btnName="back home" />
			</StyledHero>
			<Title>
				filter by <FcExpand className="sort-icon" onClick={sortTogglerHandler} />
			</Title>

			<UI show={isSortOpen}>
				<Sorting label="Brands" inputType="select" tag="type" />
				<Sorting label="Ram" inputType="select" tag="RAM" />
				<Sorting label="Popular" inputType="checkbox" tag="popular" />
				<Sorting label="Free Delivery" inputType="checkbox" tag="freeDelivery" />
				<Sorting label="Low to high" inputType="checkbox" tag="lowestPrice" />
			</UI>
			<Phone />
		</React.Fragment>
	);
}

export default Gadgets;
