import React from 'react';
import Banner from '../../Components/Banner/Banner';
import StyledHero from '../../Components/StyledHero/StyleHero';
import phoneImg from '../../assets/phone4.png';
import Phone from '../../Components/Phones/Phone';
import Sorting from '../../Components/Sorting/Sorting';
import UI from '../../Components/Sorting/UI/UI';
import Title from '../../Components/Title/Title';

function Gadgets() {
	return (
		<React.Fragment>
			<StyledHero img={phoneImg}>
				<Banner heading="latest phones" to="/" btnName="back home" />
			</StyledHero>
			<Title>filter by</Title>

			<UI>
				<Sorting label="Brands" inputType="select" tag="type" />
				<Sorting label="Ram" inputType="select" tag="ram" />
				<Sorting label="Popular" inputType="checkbox" tag="popular" />
				<Sorting label="Free Delivery" inputType="checkbox" tag="freeDelivery" />
				<Sorting label="Low to high" inputType="checkbox" tag="lowestPrice" />
			</UI>
			<Phone />
		</React.Fragment>
	);
}

export default Gadgets;
