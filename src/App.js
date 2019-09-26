import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Start from './pages/Start';
import Result from './pages/Result';

import RPSContextProvider from './contexts/RPSContext';

const App = () => {
	return (
		<HashRouter>
			<RPSContextProvider>
				<Route exact path="/" component={Home} />
				<Route path="/start" component={Start} />
				<Route path="/result" component={Result} />
			</RPSContextProvider>
		</HashRouter>
	);
};

export default App;
