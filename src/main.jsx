import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AppContextProvider } from './context/context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


// Create Query Client Instance
const queryClent = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
	<AppContextProvider>
		<QueryClientProvider client={queryClent}>
			<App />
			<ReactQueryDevtools initialIsOpen={true}/>
		</QueryClientProvider>
	</AppContextProvider>,
);
