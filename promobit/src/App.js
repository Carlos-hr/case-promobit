import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import GlobalState from './global/GlobalState';
import Router from './routes/Router';

const App = () => {
	return (
		<GlobalState>
			<ChakraProvider>
				<Router />
			</ChakraProvider>
		</GlobalState>
	);
};

export default App;
