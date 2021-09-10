import { IconButton } from '@chakra-ui/button';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';
import React from 'react';
import { Center } from '@chakra-ui/layout';
import { Main } from './styled';

export const SearchMovie = () => {
	return (
		<Main>
			<Center>
				<InputGroup width="80vw">
					<Input placeholder="Buscar filme" />
					<InputRightElement>
						<IconButton variant="link" icon={<CloseIcon />} />
						<IconButton marginRight="3vw" variant="link" icon={<SearchIcon />} />
					</InputRightElement>
				</InputGroup>
			</Center>
		</Main>
	);
};

export default SearchMovie;
