import React, { useContext } from 'react';
import StyledHero from '../../Components/StyledHero/StyleHero';
import { PhoneContext } from '../../Context';
import Info from '../../Components/Info/Info';
import Loading from '../../Components/Loading/Loading';
import { Redirect } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner';

const SingleGadget = (props) => {
	const { getPhones, loading, addToCart } = useContext(PhoneContext);

	const singlePhone = getPhones(props.match.params.slug);

	if (loading) {
		return <Loading />;
	}

	if (!loading && !singlePhone) {
		return <Redirect to="/error" />;
	}

	const { ram, warranty, description, extras, type, freeDelivery, images, price, name } = singlePhone.field;

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

	const createdBy = 'Created and Designed by ' + type;

	return (
		<React.Fragment>
			<StyledHero img={images[0]}>
				<Banner heading={name} subHeading={createdBy} to="/phone" btnName="more products" />
				{/* <SmallButtton classStyle="btn-home" addCart={() => addToCart(singlePhone)} name={button1Name} /> */}
			</StyledHero>
			<Info
				singleImages={singleImages}
				description={description}
				price={price}
				phoneExtras={phoneExtras}
				RAM={ram}
				Warranty={warranty}
				freeDelivery={freeDelivery}
				phones={singlePhone}
				cart={addToCart}
			/>
		</React.Fragment>
	);
};

export default SingleGadget;
