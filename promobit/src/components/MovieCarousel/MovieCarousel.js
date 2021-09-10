import React, { useContext } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import GlobalStateContext from '../../global/GlobalStateContext';
import { Box, Image, Spinner } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { POSTER_URL } from '../../constants/urls';

const MovieCarousel = () => {
	const { popMovies } = useContext(GlobalStateContext);
	const { results } = popMovies.data;

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 7,
			slidesToSlide: 6 // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 650 },
			items: 4,
			slidesToSlide: 2 // optional, default to 1.
		},
		mediumMobile: {
			breakpoint: { max: 650, min: 464 },
			items: 3,
			slidesToSlide: 2 // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 330 },
			items: 2,
			slidesToSlide: 1 // optional, default to 1.
		},
		small: {
			breakpoint: { max: 330, min: 0 },
			items: 1,
			slidesToSlide: 1 // optional, default to 1.
		}
	};
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
		<div>
			<Carousel
				swipeable={true}
				draggable={false}
				showDots={false}
				responsive={responsive}
				ssr={true} // means to render carousel on server-side.
				infinite={true}
				autoPlay={false}
				// autoPlaySpeed={100000}
				keyBoardControl={true}
				customTransition="all .5"
				transitionDuration={10000}
				containerClass="carousel-container"
				removeArrowOnDeviceType={[ 'tablet', 'mobile' ]}
				// deviceType={this.props.deviceType}
				dotListClass="custom-dot-list-style"
				itemClass="carousel-item-padding-40-px"
			>
				{poster()}
			</Carousel>;
		</div>
	);
};

export default MovieCarousel;
