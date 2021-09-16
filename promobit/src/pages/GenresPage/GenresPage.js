import React, { useContext } from 'react';
import { useParams } from 'react-router';
import Header from '../../components/Header/Header';
import MovieGrid from '../../components/MoviesGrid/MoviesGrid';
import GlobalStateContext from '../../global/GlobalStateContext';

const GenresPage = () => {
	const params = useParams();
	const { popMovies } = useContext(GlobalStateContext);
	const { results } = popMovies.data;
	const { id } = params;
	const numberId = Number(id);

	const filteredMovies = results
		? results.filter((movie) => {
				if (movie.genre_ids.includes(numberId)) {
					return true;
				}
				return false;
			})
		: false;

	return (
		<div>
			<Header />
			<MovieGrid results={filteredMovies} />
		</div>
	);
};
export default GenresPage;
