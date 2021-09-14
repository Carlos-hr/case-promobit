import { IconButton } from '@chakra-ui/button';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';
import React from 'react';
import { Center } from '@chakra-ui/layout';
import { Main } from './styled';
import useForm from '../../hooks/useForm';

export const SearchMovie = () => {
	
	const [ form, onChange, clear ] = useForm([]);

	return (
		<Main>
			<Center>
				<InputGroup width="80vw">
					<Input placeholder="Buscar filme" value={form} onChange={onChange} />
					<InputRightElement>
						<IconButton variant="link" icon={<CloseIcon />} onClick={clear} />
						<IconButton mr={8} variant="link" icon={<SearchIcon />} type="submit" />
					</InputRightElement>
				</InputGroup>
			</Center>
		</Main>
	);
};

export default SearchMovie;
