import { Text } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router';
import { goToHome } from '../../routes/coordinator';
import { Container } from '@chakra-ui/layout';

const Header = () => {
	const history = useHistory();
	return (
		<Container bgColor="blackAlpha.800" maxW="100%" height="10vh">
			<Text fontSize="2xl" color="blue.300" as="button" onClick={() => goToHome(history)}>
				Logo
			</Text>
		</Container>
	);
};

export default Header;
