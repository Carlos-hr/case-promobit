import React from 'react';
import { GENRES_URL } from '../../constants/urls';
import useRequestData from '../../hooks/useRequestData';
import { Button, IconButton } from '@chakra-ui/button';
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, Skeleton } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/hooks';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Flex, ListItem, UnorderedList } from '@chakra-ui/layout';
import { useHistory } from 'react-router';
import { goToGenresPage } from '../../routes/coordinator';

const SideBar = (props) => {
	const history = useHistory();
	const allGenres = useRequestData(`${GENRES_URL}`, []);
	const { isOpen, onOpen, onClose } = useDisclosure();

	const onClickGenre = (id) => {
		goToGenresPage(history, id);
	};
	const { genres } = allGenres.data;
	const renderGenres = () => {
		return genres ? (
			genres.map((genre) => {
				return (
					<UnorderedList key={genre.id}>
						<ListItem>
							<Button variant="link" onClick={() => onClickGenre(genre.id)}>
								{genre.name}
							</Button>
						</ListItem>
					</UnorderedList>
				);
			})
		) : (
			<Skeleton />
		);
	};
	return (
		<Flex>
			<IconButton colorScheme="blue" onClick={onOpen} rightIcon={<HamburgerIcon />} variant="ghost" size="lg" />
			<Drawer placement={'left'} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent>
					<Flex justify="space-between" borderBottomWidth="1px">
						<DrawerHeader>Gêneros</DrawerHeader>
						<IconButton
							rightIcon={<CloseIcon />}
							variant="ghost"
							size="xs"
							alignSelf="center"
							mr={5}
							onClick={onClose}
						/>
					</Flex>
					<DrawerBody>{renderGenres()}</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Flex>
	);
};
export default SideBar;
