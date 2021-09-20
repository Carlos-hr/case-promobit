import React from 'react';
import { GENRES_URL } from '../../constants/urls';
import useRequestData from '../../hooks/useRequestData';
import { Button, IconButton } from '@chakra-ui/button';
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, Skeleton } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/hooks';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Flex, ListItem, UnorderedList } from '@chakra-ui/layout';

const SideBar = (props) => {
	const allGenres = useRequestData(`${GENRES_URL}`, []);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { setFilter, setId } = props.setters;
	const { genres } = allGenres.data;

	const onClickGenre = (id) => {
		setFilter(true);
		setId(id);
		onClose();
	};

	const onClickClearFilters = () => {
		setFilter(false);
		onClose();
	};
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
					<Button
						variant="link"
						colorScheme="blue"
						size="xs"
						mt={5}
						pos="left"
						onClick={() => onClickClearFilters()}
					>
						Limpar filtros
					</Button>
					<DrawerBody>{renderGenres()}</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Flex>
	);
};
export default SideBar;
