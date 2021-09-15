import React from 'react';
import { useParams } from 'react-router';
import Header from '../../components/Header/Header';
import MovieGrid from '../../components/MoviesGrid/MoviesGrid';
import Paging from '../../components/Paging/Paging';
import { BASE_URL } from '../../constants/urls';
import useRequestData from '../../hooks/useRequestData';

export const MoviesPage = () => {
	const params = useParams();
	const { category, page } = params;
	const movies = useRequestData(`${BASE_URL}/${category}`, [], page);
	const { results } = movies.data;
	console.log(movies)
	return (
		<div>
			<Header />
			<MovieGrid results={results} />
			<Paging page={page} category={category} />
		</div>
	);
};

export default MoviesPage;
