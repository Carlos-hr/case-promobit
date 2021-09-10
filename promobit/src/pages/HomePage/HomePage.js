import React from 'react';
import Carousel from '../../components/MovieCarousel/MovieCarousel';
import Header from '../../components/Header/Header';
import MovieCard from '../../components/MovieCard/MovieCard';
import SearchMovie from '../../components/SearchMovie/SearchMovie';

export const HomePage = () => {

	return (
		<div>
			<Header />
			<SearchMovie />
			<Carousel component={MovieCard} />
		</div>
	);
};

export default HomePage;
