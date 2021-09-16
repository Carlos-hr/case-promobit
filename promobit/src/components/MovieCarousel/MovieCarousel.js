import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Flex, Spinner, Text, Container } from '@chakra-ui/react';
import { useHistory } from 'react-router';
import { goToMovieDetails, goToMoviesPage } from '../../routes/coordinator';
import MovieCard from '../MovieCard/MovieCard';
import { Button } from '@chakra-ui/button';

const MovieCarousel = (props) => {
	const { results, title, category, viewMore } = props;
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
	const renderViewMore = () => {
		if (viewMore) {
			return (
				<Button variant="link" size="sm" colorScheme="blue" onClick={() => onClickViewMore(category)} ml={3}>
					Ver mais
				</Button>
			);
		}
	};

	return (
		<Container maxW="100%" mt={10} mb={10} justify="space-between">
			<Flex mb={2} ml={5}>
				<Text fontWeight="bold">{title}</Text>
				{renderViewMore()}
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
							max: 1400,
							min: 1024
						},
						items: 7.5,
						slidesToSlide: 4,
						partialVisibilityGutter: 40
					},
					mobileS: {
						breakpoint: {
							max: 340,
							min: 0
						},
						items: 1,
						partialVisibilityGutter: 30
					},
					mobile: {
						breakpoint: {
							max: 500,
							min: 340
						},
						items: 2,
						partialVisibilityGutter: 0
					},
					tablet: {
						breakpoint: {
							max: 1024,
							min: 500
						},
						items: 3.5,
						slidesToSlide: 2,
						partialVisibilityGutter: 30
					},
					laptopL: {
						breakpoint: {
							max: 1260,
							min: 1024
						},
						items: 6.5,
						slidesToSlide: 2,
						partialVisibilityGutter: 30
					},
				}}
			>
				{poster()}
			</Carousel>
		</Container>
	);
};

export default MovieCarousel;
