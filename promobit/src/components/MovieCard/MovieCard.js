import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import { POSTER_URL } from '../../constants/urls';
import { Box, Image, Spinner } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import fallback from '../../assets/fallback.png'

const MovieCard = (props) => {
    
	const { results, onClick } = props;
	return results ? (
		<Box
			as="button"
			width="10rem"
			maxW="sm"
			borderWidth="1px"
			borderRadius="lg"
			overflow="hidden"
			onClick={() => onClick(results.id)}
			ml={5}
			mr={5}
			mb={5}
		>
			<Image src={`${POSTER_URL}${results.poster_path}`} alt={results.title} fallbackSrc={fallback} />
			<Box p="2">
				<Box mt="1" fontWeight="semibold" fontSize="sm" lineHeight="tight" isTruncated>
					{results.title}
				</Box>

				<Box d="flex" mt="2" alignItems="center">
					{Array(5)
						.fill('')
						.map((_, i) => (
							<StarIcon
								key={i}
								color={i < Math.round(results.vote_average / 2) ? 'blue.500' : 'gray.300'}
							/>
						))}
				</Box>
			</Box>
		</Box>
	) : (
		<Spinner />
	);
};

export default MovieCard;
