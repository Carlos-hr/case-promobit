import React, { useState } from 'react';
import { useParams } from 'react-router';
import Header from '../../components/Header/Header';
import MovieGrid from '../../components/MoviesGrid/MoviesGrid';
import Paging from '../../components/Paging/Paging';
import SearchMovie from '../../components/SearchMovie/SearchMovie';
import SideBar from '../../components/SideBar/SideBar';
import { BASE_URL } from '../../constants/urls';
import useRequestData from '../../hooks/useRequestData';

export const MoviesPage = () => {
	const params = useParams();
	const { category, page } = params;
	const movies = useRequestData(`${BASE_URL}/${category}`, [], page);
	const { results } = movies.data;

	const [filter, setFilter] = useState(false)
	const [id, setId] = useState()
	const numberId = Number(id)

	const filteredMovies = results
	? results.filter((movie) => {
			if (movie.genre_ids.includes(numberId)) {
				return true;
			}
			return false;
		})
	: false;

	const setters = {setFilter, setId}
	return (
		<div>
			<Header />
			<SideBar setters={setters}/>
			<SearchMovie/>
			<MovieGrid results={filter ? filteredMovies : results} />
			<Paging page={page} category={category} />
		</div>
	);
};

export default MoviesPage;
