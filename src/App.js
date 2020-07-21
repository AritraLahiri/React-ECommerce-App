import React, { useContext } from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import Gadgets from './Pages/Gadgets/Gadgets';
import Nav from './Container/Nav/Nav';
import { Route, Switch } from 'react-router-dom';
import SingleGadget from './Pages/Single Gadget/SingleGadget';
import Error from './Pages/Error/Error';
import Cart from './Pages/Cart/Cart';
import { PhoneContext } from './Context';

function App() {
	const { cart } = useContext(PhoneContext);

	return (
		<React.Fragment>
			<Nav cart={cart} />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/phone" component={Gadgets} />
				<Route exact path="/gadget/checkout" component={Cart} />
				<Route exact path="/gadget/:slug" component={SingleGadget} />
				<Route component={Error} />
			</Switch>
		</React.Fragment>
	);
}

export default App;
