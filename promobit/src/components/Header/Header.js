import { Text } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router';
import { secondary } from '../../constants/colors';
import { goToHome } from '../../routes/coordinator';
import { Main } from './styled';

const Header = () => {
	const history = useHistory();
	return (
		<Main>
			<Text fontSize="2xl" color={secondary} as="button" onClick={() => goToHome(history)}>
				Logo
			</Text>
		</Main>
	);
};

export default Header;
