import { Text } from '@chakra-ui/react';
import React from 'react';
import { secondary } from '../../constants/colors';
import { Main } from './styled';

const Header = () => {
	return (
		<Main>
			<Text fontSize="2xl" color={secondary}>
        Logo
			</Text>
		</Main>
	);
};

export default Header;
