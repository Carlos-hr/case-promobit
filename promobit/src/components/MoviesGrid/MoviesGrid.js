import { Flex, SimpleGrid } from '@chakra-ui/layout';
import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { Spinner } from '@chakra-ui/react';
import { goToMovieDetails } from '../../routes/coordinator';
import { useHistory } from 'react-router';

const MovieGrid = (props) => {
	const history = useHistory()
	const { results } = props;

	const onClickDetails = (id) => {
		goToMovieDetails(history, id);
	};
	const grid = () => {
		return results ? (
			results.map((movie) => {
				return <MovieCard key={movie.id} results={movie} onClick={onClickDetails} />;
			})
		) : (
			<Spinner />
		);
	};
	return (
		<Flex maxW="container.xl" justifyContent="center" mt={10}>
			<SimpleGrid columns={[ 1, 2, 3, 4, 5 ]} gap={[ 5, 10, 20 ]}>
				{grid()}
			</SimpleGrid>
		</Flex>
	);
};
export default MovieGrid;
