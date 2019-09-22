import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Start from './pages/Start';
import Result from './pages/Result';
import NameContextProvider from './contexts/NameContext';
import ScoreContextProvider from './contexts/ScoreContext';
import ChoiceContextProvider from './contexts/ChoiceContext';

const App = () => {
	return (
		<HashRouter>
			<NameContextProvider>
				<Route exact path="/" component={Home} />
				<ChoiceContextProvider>
					<ScoreContextProvider>
						<Route path="/start" component={Start} />
						<Route path="/result" component={Result} />
					</ScoreContextProvider>
				</ChoiceContextProvider>
			</NameContextProvider>
		</HashRouter>
	);
};

export default App;
