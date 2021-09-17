import React, { useContext } from 'react';
import MovieCarousel from '../../components/MovieCarousel/MovieCarousel';
import Header from '../../components/Header/Header';
import SearchMovie from '../../components/SearchMovie/SearchMovie';
import GlobalStateContext from '../../global/GlobalStateContext';

export const HomePage = () => {
	const { popMovies, topRatedMovies } = useContext(GlobalStateContext);

	const pop = popMovies.data.results;
	const topRated = topRatedMovies.data.results;

	return (
		<div>
			<Header />
			<SearchMovie />
			<MovieCarousel results={pop} title={'Populares'} category={'popular'} viewMore />
			<MovieCarousel results={topRated} title={'Melhores avaliados'} category={'top_rated'} viewMore />
		</div>
	);
};

export default HomePage;
