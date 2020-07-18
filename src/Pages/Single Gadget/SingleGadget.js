import React, { useContext } from 'react';
import StyledHero from '../../Components/StyledHero/StyleHero';
import { PhoneContext } from '../../Context';
import Info from '../../Components/Info/Info';
import Loading from '../../Components/Loading/Loading';
import { Redirect } from 'react-router-dom';

const SingleGadget = (props) => {
	const { getPhones, loading } = useContext(PhoneContext);

	const singlePhone = getPhones(props.match.params.slug);

	if (loading) {
		return <Loading />;
	}

	if (!loading && !singlePhone) {
		return <Redirect to="/error" />;
	}

	const { ram, warranty, description, extras, freeDelivery, images,  price } = singlePhone.field;

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
			<StyledHero img={images[0]}>{/* <Banner heading={name} to="/" btnName="back home" /> */}</StyledHero>
			<Info
				singleImages={singleImages}
				description={description}
				price={price}
				phoneExtras={phoneExtras}
				RAM={ram}
				Warranty={warranty}
				freeDelivery={freeDelivery}
			/>
		</React.Fragment>
	);
};

export default SingleGadget;
