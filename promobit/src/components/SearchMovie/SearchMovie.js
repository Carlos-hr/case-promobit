import { IconButton } from '@chakra-ui/button';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';
import React from 'react';

export const SearchMovie = () => {

	return (
		<div>
			{/* {getMovies()} */}
			<br />
			<InputGroup width="80vw">
				<Input placeholder="Buscar filme" />
				<InputRightElement>
					<IconButton variant="link" icon={<CloseIcon />} />
					<IconButton marginRight="3vw" variant="link" icon={<SearchIcon />} />
				</InputRightElement>
			</InputGroup>
		</div>
	);
};

export default SearchMovie;
