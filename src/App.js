import React from 'react';

import Routes from './routes/Routes';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';

function App() {
	return (
		<Provider store={store}>
				<Routes />
		</Provider>
	);
}

export default App;
