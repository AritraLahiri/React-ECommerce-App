import React, { useContext } from 'react';
import { PhoneContext } from '../../Context';

const getUniqueOptions = (phones, selectType) => {
	// console.log(types);
	const allTypes = phones.map((phn) => (phn.field[selectType] ? phn.field[selectType] : null));

	// console.log(allTypes);

	const uniqueType = [ 'All', ...new Set(allTypes) ].map((opt, index) => {
		return (
			<option key={index} value={opt} className="option">
				{opt}
			</option>
		);
	});

	return uniqueType;
};

const Sorting = (props) => {
	let sortingBlocks = null;
	const { handleChange, phones, optionValue } = useContext(PhoneContext);
	let option = getUniqueOptions(phones, props.tag);

	switch (props.inputType) {
		case 'checkbox':
			sortingBlocks = <input onClick={handleChange} type={props.inputType} name={props.tag} />;
			break;
		case 'slider':
			sortingBlocks = <input type={props.inputType} />;
			break;
		case 'text':
			sortingBlocks = <input type={props.inputType} />;
			break;
		case 'select':
			sortingBlocks = (
				<select name={props.tag} onChange={handleChange} className="form-control" value={optionValue}>
					{option}
				</select>
			);
			break;

		default:
			sortingBlocks = 'Pleae Pass a inputType on Sorting Component';
			break;
	}

	return (
		<React.Fragment>
			<label className="label-text">{props.label}</label>
			{sortingBlocks}
		</React.Fragment>
	);
};

export default Sorting;
