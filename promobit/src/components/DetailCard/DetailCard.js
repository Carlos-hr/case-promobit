import { Center, Container } from '@chakra-ui/layout';
import { Box, Image, Spinner } from '@chakra-ui/react';
import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import { useParams } from 'react-router';
import { BASE_URL, POSTER_URL } from '../../constants/urls';
import useRequestData from '../../hooks/useRequestData';
import { Main } from './styled';

const DetailCard = () => {
	const params = useParams();
	const { id } = params;

	const movieDetail = useRequestData(`${BASE_URL}/movie/${id}`, []);
	const { data } = movieDetail;

	console.log(movieDetail);

	const details = () => {
		return data ? (
			<div>
				<Center>{data.title}</Center>
				<Main maxW="container.lg" >
					<Box width="10rem" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
						<Image src={`${POSTER_URL}${data.poster_path}`} alt={data.title} />
					</Box>
				</Main>
			</div>
		) : (
			<Spinner />
		);
	};
	return <div>{details()}</div>;
};

export default DetailCard;
