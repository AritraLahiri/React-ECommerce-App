import React, { Component } from 'react';
// import data from './data';
import createClient from './Contentful';

const PhoneContext = React.createContext();

class PhoneProvider extends Component {
	state = {
		phones: [],
		featured: [],
		sortedPhones: [],
		optionValue: 'all',
		loading: true,
		cart: []
	};

	getData = async () => {
		// console.log('In the get data');
		try {
			const response = await createClient.getEntries({
				content_type: 'mobileEcommerceApp'
			});
			// console.log(response.items);
			const phones = this.formatData(response.items);

			const featuredPhones = phones.filter((phone) => phone.field.featured);

			this.setState({ featured: featuredPhones, sortedPhones: phones, phones, loading: false });
		} catch (error) {
			console.log(error);
			this.setState({ loading: true });
			throw error;
		}
	};

	componentDidMount() {
		this.getData();
	}

	formatData = (dataContent) => {
		const data = dataContent.map((ele) => {
			let id = ele.sys.id;
			let images = ele.fields.images.map((img) => img.fields.file.url);

			let field = { ...ele.fields, images: images };

			let formatedData = { field, id };

			return formatedData;
		});

		return data;
	};
	getPhones = (slug) => {
		const oldState = { ...this.state };
		const singlePhone = oldState.phones.find((phn) => phn.field.slug === slug);
		// console.log(singlePhone);
		return singlePhone;
	};

	addToCart = (item) => {
		let oldCart = [ ...this.state.cart ];

		oldCart.push(item);
		this.setState({ cart: oldCart });
	};

	removeFromCart = (item) => {
		let oldCart = [ ...this.state.cart ];

		const index = oldCart.indexOf(item);

		oldCart.splice(index, 1);

		this.setState({ cart: oldCart });
	};

	clearAllCart = () => {
		this.setState({ cart: [] });
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

			this.setState((prevState) => {
				return { sortedPhones: prevState.phones, optionValue: 'All' };
			});

			// this.setState({ sortedPhones: oldState.phones, optionValue: 'All' });
		}
	};

	getLowestPrice = (val) => {
		// console.log('In the Lowest Prcie');
		const oldState = { ...this.state };
		if (val) {
			const getLowestPrice = oldState.phones.sort((phn1, phn2) => phn1.field.price - phn2.field.price);
			// console.log(getLowestPrice);
			this.setState({ sortedPhones: getLowestPrice });

			// console.log(this.state.phones);
		} else {
			this.setState((prevState) => {
				return { sortedPhones: prevState.phones };
			});
			// this.setState({ sortedPhones: oldState.phones });
		}
	};
	getHighestPrice = (val) => {
		const oldState = { ...this.state };
		if (val) {
			const getHighestPrice = oldState.phones.sort((phn1, phn2) => phn2.field.price - phn1.field.price);
			this.setState({ sortedPhones: getHighestPrice });
		} else {
			this.setState((prevState) => {
				return { sortedPhones: prevState.phones };
			});
			// this.setState({ sortedPhones: oldState.phones });
		}
	};

	getFreeDelivery = (val) => {
		const oldState = { ...this.state };
		if (val) {
			const freeDeliveryPhones = oldState.phones.filter((phn) => phn.field.freeDelivery);
			// console.log(freeDeliveryPhones);
			this.setState({ sortedPhones: freeDeliveryPhones });
		} else {
			this.setState((prevState) => {
				return { sortedPhones: prevState.phones };
			});
			// this.setState({ sortedPhones: oldState.phones });
		}
	};
	getPopularPhones = (val) => {
		const oldState = { ...this.state };
		if (val) {
			const popularPhones = oldState.phones.filter((phn) => phn.field.featured);
			// console.log(popularPhones);
			this.setState({ sortedPhones: popularPhones });
		} else {
			this.setState((prevState) => {
				return { sortedPhones: prevState.phones };
			});
			// this.setState({ sortedPhones: oldState.phones });
		}
	};

	handleChange = (event) => {
		// const type = event.target.type;

		const name = event.target.name;

		const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

		// const value = event.target.value;

		// console.log(value);
		// console.log(type);
		// console.log(name);

		if (name === 'lowestPrice') this.getLowestPrice(value, event);
		else if (name === 'highestPrice') this.getHighestPrice(value);
		else if (name === 'freeDelivery') this.getFreeDelivery(value);
		else if (name === 'popular') this.getPopularPhones(value);
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
					addToCart: this.addToCart,
					removeFromCart: this.removeFromCart,
					clearAllCart: this.clearAllCart,
					handleChange: this.handleChange
				}}
			>
				{this.props.children}
			</PhoneContext.Provider>
		);
	}
}

export { PhoneProvider, PhoneContext };
