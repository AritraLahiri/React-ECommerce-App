import React, { Component } from 'react';
import data from './data';

const PhoneContext = React.createContext();

class PhoneProvider extends Component {
	state = {
		phones: data,
		featured: [],
		sortedPhones: data,
		optionValue: 'all',
		loading: true,
		isSortOpen: true
	};

	componentDidMount() {
		const featuredPhones = data.filter((phone) => phone.field.featured);
		this.setState({ featured: featuredPhones });
	}

	sortTogglerHandler = () => {
		this.setState({ isSortOpen: !this.state.isSortOpen });
	};

	getPhones = (slug) => {
		const oldState = { ...this.state };
		const singlePhone = oldState.phones.find((phn) => phn.field.slug === slug);
		return singlePhone;
	};

	getPhonesBySelect = (val, name) => {
		// console.log('in the select func');

		const oldState = { ...this.state };

		if (typeof oldState.phones[0].field[name] !== typeof val && (val !== 'All' && val !== 'on')) {
			val = parseInt(val);
		}

		if (val !== 'All') {
			const updatedPhones = oldState.phones.filter((phn) => phn.field[name] === val);
			// console.log(updatedPhones);
			this.setState({ sortedPhones: updatedPhones, optionValue: val });
		}
		if (val === 'All') {
			// console.log('Clicked on All');
			this.setState({ sortedPhones: data, optionValue: 'All' });
		}
	};

	getLowestPrice = () => {
		// console.log('In the Lowest Prcie');
		const oldState = { ...this.state };
		const getLowestPrice = oldState.phones.sort((phn1, phn2) => phn1.field.price - phn2.field.price);
		// console.log(getLowestPrice);
		this.setState({ sortedPhones: getLowestPrice });
		// console.log(this.state.phones);
	};
	getHighestPrice = () => {
		const oldState = { ...this.state };
		const getHighestPrice = oldState.phones.sort((phn1, phn2) => phn2.field.price - phn1.field.price);
		this.setState({ sortedPhones: getHighestPrice });
	};

	getFreeDelivery = () => {
		const oldState = { ...this.state };
		const freeDeliveryPhones = oldState.phones.filter((phn) => phn.field.freeDelivery);
		// console.log(freeDeliveryPhones);
		this.setState({ sortedPhones: freeDeliveryPhones });
	};
	getPopularPhones = () => {
		const oldState = { ...this.state };
		const popularPhones = oldState.phones.filter((phn) => phn.field.featured);
		// console.log(popularPhones);
		this.setState({ sortedPhones: popularPhones });
	};

	handleChange = (event) => {
		// const type = event.target.type;

		const name = event.target.name;

		const value = event.target.value;

		// console.log(value);
		// console.log(type);
		// console.log(name);

		if (name === 'lowestPrice') this.getLowestPrice();
		else if (name === 'highestPrice') this.getHighestPrice();
		else if (name === 'freeDelivery') this.getFreeDelivery();
		else if (name === 'popular') this.getPopularPhones();
		else {
			// console.log(name);
			// console.log(value);
			this.getPhonesBySelect(value, name);
		}
	};

	render() {
		return (
			<PhoneContext.Provider
				value={{
					...this.state,
					getPhones: this.getPhones,
					sortTogglerHandler: this.sortTogglerHandler,
					handleChange: this.handleChange
				}}
			>
				{this.props.children}
			</PhoneContext.Provider>
		);
	}
}

const PhoneConsumer = PhoneContext.Consumer;

export { PhoneProvider, PhoneConsumer, PhoneContext };
