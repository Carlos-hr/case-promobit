import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Flex, Spinner, Text } from '@chakra-ui/react';
import { Main } from './styled';
import { useHistory } from 'react-router';
import { goToMovieDetails, goToMoviesPage } from '../../routes/coordinator';
import MovieCard from '../MovieCard/MovieCard';
import { Button } from '@chakra-ui/button';

const MovieCarousel = (props) => {
	const { results, title, category } = props;
	const history = useHistory();

	const onClickDetails = (id) => {
		goToMovieDetails(history, id);
	};

	const onClickViewMore = (category) => {
		goToMoviesPage(history, category);
	};

	const poster = () => {
		return results ? (
			results.map((movie) => {
				return <MovieCard key={movie.id} results={movie} onClick={onClickDetails} />;
			})
		) : (
			<Spinner />
		);
	};

	return (
		<Main>
			<Flex mb={2} ml={5}>
				<Text fontWeight="bold">{title}</Text>
				<Button variant="link" size="sm" colorScheme="blue" onClick={() => onClickViewMore(category)} ml={3}>
					Ver mais
				</Button>
			</Flex>
			<Carousel
				additionalTransfrom={0}
				arrows
				autoPlaySpeed={3000}
				draggable
				infinite
				keyBoardControl
				minimumTouchDrag={80}
				slidesToSlide={1}
				swipeable
				responsive={{
					desktop: {
						breakpoint: {
							max: 3000,
							min: 1024
						},
						items: 7.5,
						slidesToSlide: 4,
						partialVisibilityGutter: 40
					},
					mobile: {
						breakpoint: {
							max: 464,
							min: 0
						},
						items: 2,
						partialVisibilityGutter: 30
					},
					tablet: {
						breakpoint: {
							max: 1024,
							min: 464
						},
						items: 3.5,
						slidesToSlide: 2,
						partialVisibilityGutter: 30
					}
				}}
			>
				{poster()}
			</Carousel>
		</Main>
	);
};

export default MovieCarousel;
