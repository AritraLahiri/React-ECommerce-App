import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import Gadgets from './Pages/Gadgets/Gadgets';
import Nav from './Container/Nav/Nav';
import { Route, Switch } from 'react-router-dom';
import SingleGadget from './Pages/Single Gadget/SingleGadget';
import Error from './Pages/Error/Error';

function App() {
	return (
		<React.Fragment>
			<Nav />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/gadget" component={Gadgets} />
				<Route exact path="/gadget/:slug" component={SingleGadget} />
				<Route component={Error} />
			</Switch>
		</React.Fragment>
	);
}

export default App;
