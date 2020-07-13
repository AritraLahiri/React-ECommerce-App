import React, { useContext } from 'react';
import Banner from '../../Components/Banner/Banner';
import StyledHero from '../../Components/StyledHero/StyleHero';
import { PhoneContext } from '../../Context';
import Info from '../../Components/Info/Info';

const SingleGadget = (props) => {
	const { getPhones } = useContext(PhoneContext);
	const singlePhone = getPhones(props.match.params.slug);
	// console.log(singlePhone);
	const { RAM, Warranty, description, extras, freeDelivery, images, name, price } = singlePhone.field;

	let singleImages = images.map((img, index) => {
		return <img src={img} alt="PhoneImage" key={index} />;
	});

	let phoneExtras = extras.map((extras, index) => {
		return (
			<p className="extras" key={index}>
				- {extras}{' '}
			</p>
		);
	});

	return (
		<React.Fragment>
			<StyledHero img={images[0]}>
				<Banner heading={name} to="/" btnName="back home" />
			</StyledHero>
			<Info
				singleImages={singleImages}
				description={description}
				price={price}
				phoneExtras={phoneExtras}
				RAM={RAM}
				Warranty={Warranty}
				freeDelivery={freeDelivery}
			/>
		</React.Fragment>
	);
};

export default SingleGadget;
