import React from 'react';
import { Box, Image, Spinner } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { POSTER_URL } from '../../constants/urls';

const MovieCard = (props) => {
	const { results } = props;

	const poster = () => {
		return results ? (
			results.map((movie) => {
				return (
					<Box key={movie.id} width="10rem" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
						<Image src={`${POSTER_URL}${movie.poster_path}`} alt={movie.title} />

						<Box p="2">
							<Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
								{movie.title}
							</Box>

							<Box d="flex" mt="2" alignItems="center">
								{Array(5)
									.fill('')
									.map((_, i) => (
										<StarIcon
											key={i}
											color={i < Math.round(movie.vote_average / 2) ? 'blue.500' : 'gray.300'}
										/>
									))}
							</Box>
						</Box>
					</Box>
				);
			})
		) : (
			<Spinner />
		);
	};
	return <div>{poster()}</div>;
};

export default MovieCard;
