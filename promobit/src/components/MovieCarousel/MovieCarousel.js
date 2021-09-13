import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Spinner, Text } from '@chakra-ui/react';
import { Main } from './styled';
import { useHistory } from 'react-router';
import { goToMovieDetails } from '../../routes/coordinator';
import MovieCard from '../MovieCard/MovieCard';

const MovieCarousel = (props) => {
	const { results, title } = props;
	const history = useHistory();

	const onClickButton = (id) => {
		console.log(id);
		goToMovieDetails(history, id);
	};

	const poster = () => {
		return results ? (
			results.map((movie) => {
				return (
					<MovieCard key={movie.id} results={movie} onClick={onClickButton} />
				);
			})
		) : (
			<Spinner />
		);
	};

	return (
		<Main>
			<Text>{title}</Text>
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
