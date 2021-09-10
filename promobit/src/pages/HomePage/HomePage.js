import React, {useContext} from 'react';
import MovieCarousel from '../../components/MovieCarousel/MovieCarousel';
import Header from '../../components/Header/Header';
// import MovieCard from '../../components/MovieCard/MovieCard';
import SearchMovie from '../../components/SearchMovie/SearchMovie';
import GlobalStateContext from '../../global/GlobalStateContext';

export const HomePage = () => {
	const {popMovies}  = useContext(GlobalStateContext)
	const { results } = popMovies.data;

	return (
		<div>
			<Header />
			<SearchMovie />
			<MovieCarousel results={results} />
			{/* <MovieCard  /> */}
		</div>
	);
};

export default HomePage;
