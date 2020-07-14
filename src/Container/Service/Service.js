import React, { useState } from 'react';
import { FcAbout, FcCheckmark, FcPhone, FcShipped } from 'react-icons/fc';
import Title from '../../Components/Title/Title';

const Service = () => {
	const [ state ] = useState({
		Services: [
			{
				icons: <FcAbout />,
				title: '2 Years Warranty',
				caption: 'Get a minimum of two year of warrantly on every purchase.'
			},
			{
				icons: <FcCheckmark />,
				title: 'Best Quality Assured',
				caption: 'Rest assured as our products are shipped with double checked quality checkup.'
			},
			{
				icons: <FcPhone />,
				title: 'Free Shipping',
				caption: 'We appreciate your purchase so delivery comes as a token of our gatitude'
			},
			{
				icons: <FcShipped />,
				title: 'Customer Service',
				caption:
					'Facing trouble? Call our Customer Service we’re ready to solve the issue as quick as possible.'
			}
		]
	});
	let service = state.Services.map((ele, index) => {
		return (
			<div key={index}>
				<span className="icons">{ele.icons}</span>
				<h6 className="service-head">{ele.title} </h6>
				<p className="service-caption">{ele.caption}</p>
			</div>
		);
	});

	return (
		<section className="Service">
			<Title>services</Title>
			<div className="service-cont">{service}</div>
		</section>
	);
};

export default Service;
