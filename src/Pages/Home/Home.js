import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Banner from '../../Components/Banner/Banner';
import Service from '../../Container/Service/Service';
import Featured from '../../Components/Featured/Featured';

function Home() {
	return (
		<React.Fragment>
			<Hero>
				<Banner
					heading="the future is here"
					subHeading="Premium gadgets starting at 10,0000"
					to="/phone"
					btnName="Our Products"
				/>
			</Hero>
			<Service />
			<Featured />
		</React.Fragment>
	);
}

export default Home;
