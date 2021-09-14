import { Center, Container, Flex, Text } from '@chakra-ui/layout';
import { Box, Heading, Image, Spinner } from '@chakra-ui/react';
import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import { useParams } from 'react-router';
import { BASE_URL, POSTER_URL } from '../../constants/urls';
import useRequestData from '../../hooks/useRequestData';
import MovieCarousel from '../MovieCarousel/MovieCarousel';
import { Main } from './styled';
import { StarIcon } from '@chakra-ui/icons';

const DetailCard = () => {
	const params = useParams();
	const { id } = params;

	const movieDetail = useRequestData(`${BASE_URL}/${id}`, []);
	const relatedMovies = useRequestData(`${BASE_URL}/${id}/similar`, []);
	const { data } = movieDetail;
	console.log(data);
	const { results } = relatedMovies.data;

	const details = () => {
		return data.poster_path ? (
			<Main maxW="container.lg">
				{/* <Flex
					opacity="0.8"
				>
					<Image
						borderWidth="1px"
						borderRadius="lg"
						boxSize="10rem"
						objectFit="cover"
						size="md"
						src={`${POSTER_URL}${data.backdrop_path}`}
						alt={data.title}
						position="absolute"
					/>
				</Flex> */}
				<Flex justify="space-between" mt={10}>
					<Image
						borderWidth="1px"
						borderRadius="lg"
						boxSize="10rem"
						objectFit="cover"
						size="md"
						src={`${POSTER_URL}${data.poster_path}`}
						alt={data.title}
					/>
					<Box ml={10}>
						<Heading size="lg">{data.title} </Heading>
						<Text as="cite">{data.tagline}</Text>
						<Text mt={2}>
							{Array(5)
								.fill('')
								.map((_, i) => (
									<StarIcon
										key={i}
										color={i < Math.round(data.vote_average / 2) ? 'blue.500' : 'gray.300'}
									/>
								))}
						</Text>
						<Box mt={5}>
							<Text fontWeight="bold">Sinopse:</Text>
							<Text>{data.overview}</Text>
						</Box>
					</Box>
				</Flex>
			</Main>
		) : (
			<Spinner />
		);
	};
	return (
		<div>
			{details()}
			<MovieCarousel results={results} title={'Titulos Relacionados'} category={'popular'} />
		</div>
	);
};

export default DetailCard;
