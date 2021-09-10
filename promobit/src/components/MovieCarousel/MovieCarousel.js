import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, Image, Spinner } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { POSTER_URL } from '../../constants/urls';

const MovieCarousel = (props) => {
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
	return (
		<Carousel
			additionalTransfrom={0}
			arrows
			autoPlaySpeed={3000}
			centerMode={false}
			className=""
			containerClass="container-with-dots"
			dotListClass=""
			draggable
			focusOnSelect={false}
			infinite
			itemClass=""
			keyBoardControl
			minimumTouchDrag={80}
			renderButtonGroupOutside={false}
			renderDotsOutside={false}
			responsive={{
				desktop: {
					breakpoint: {
						max: 3000,
						min: 1024
					},
					items: 7.5,
					slidesToSlide:4,
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
					slidesToSlide:2,
					partialVisibilityGutter: 30
				}
			}}
			showDots={false}
			sliderClass=""
			slidesToSlide={1}
			swipeable
		>
			{poster()}
		</Carousel>
	);
};

export default MovieCarousel;
