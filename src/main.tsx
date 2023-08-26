/**
 * 20/08/2023
 * frontend-demo
 *
 * @author Alisher Khamidov (AIT TR)
 */

// eslint-disable-next-line import/default
import React from 'react';
// eslint-disable-next-line import/default
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion, import/no-named-as-default-member
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
