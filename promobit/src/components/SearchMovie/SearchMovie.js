import { IconButton } from '@chakra-ui/button';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';
import React from 'react';
import { Center } from '@chakra-ui/layout';
import { Main } from './styled';
import useForm from '../../hooks/useForm';
import { goToSearchPage } from '../../routes/coordinator';
import { useHistory } from 'react-router';

export const SearchMovie = () => {
	const history = useHistory();
	const [ form, onChange, clear ] = useForm([]);
	
	const onSubmit = (e) => {
		e.preventDefault();
		goToSearchPage(history, form);
	};
	return (
		<Main>
			<Center>
				<form onSubmit={onSubmit}>
						<InputGroup width="80vw">
							<Input placeholder="Buscar filme" value={form} onChange={onChange} isRequired />
							<InputRightElement>
								<IconButton variant="link" icon={<CloseIcon />} onClick={clear} />
								<IconButton
									mr={8}
									variant="link"
									icon={<SearchIcon />}
									type="submit"
								/>
							</InputRightElement>
						</InputGroup>
				</form>
			</Center>
		</Main>
	);
};

export default SearchMovie;
