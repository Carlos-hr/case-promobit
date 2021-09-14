import React from 'react';
import Header from '../../components/Header/Header';
import MovieGrid from '../../components/MoviesGrid/MoviesGrid';

export const MoviesPage = () => {
	return (
		<div>
			<Header />
			<h1> Eu sou a MoviesPage</h1>
			<MovieGrid/>
		</div>
	);
};

export default MoviesPage;
