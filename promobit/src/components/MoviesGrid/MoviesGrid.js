import { Center, Flex, SimpleGrid } from '@chakra-ui/layout';
import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { Spinner } from '@chakra-ui/react';
import { goToMovieDetails } from '../../routes/coordinator';
import { useHistory } from 'react-router';
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/alert';

const MovieGrid = (props) => {
	const history = useHistory();
	const { results } = props;

	const onClickDetails = (id) => {
		goToMovieDetails(history, id);
	};

	const grid = () => {
		return results && results.length !== 0 ? (
			<SimpleGrid columns={[ 1, 2, 3, 4, 5 ]} gap={[ 5, 10 ]}>
				{results.map((movie) => {
					return <MovieCard key={movie.id} results={movie} onClick={onClickDetails} />;
				})}
			</SimpleGrid>
		) : results !== undefined ? (
			<Center maxW="lg">
				<Alert status="error" borderRadius="10" flexDirection="column">
					<Flex mt={5}>
						<AlertIcon />
						<AlertTitle>Filme não encontrado!</AlertTitle>
					</Flex>
					<AlertDescription mb={5}>
						Não foi encontrado nenhum filme correspondente, faça uma nova busca ou procure nas próximas
						páginas.
					</AlertDescription>
				</Alert>
			</Center>
		) : (
			<Spinner />
		);
	};
	return (
		<Flex maxW="container.xl" justifyContent="center" mt={10}>
			{grid()}
		</Flex>
	);
};
export default MovieGrid;
