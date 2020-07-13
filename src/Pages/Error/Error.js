import React from 'react';
import Banner from '../../Components/Banner/Banner';
import ErrorImg from '../../assets/errorcover.jpg';
import StyledHero from '../../Components/StyledHero/StyleHero';

function Error() {
	return (
		<React.Fragment>
			<StyledHero img={ErrorImg}>
				<Banner heading="Error 404" subHeading="page not found" to="/" btnName="back home" />
			</StyledHero>
		</React.Fragment>
	);
}

export default Error;
